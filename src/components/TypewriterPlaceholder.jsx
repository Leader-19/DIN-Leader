import { useState, useEffect, useRef } from 'react'

export default function TypewriterPlaceholder({ words = [], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000 }) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex]

    if (!isDeleting) {
      // Typing
      if (text.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1))
        }, typingSpeed)
      } else {
        // Pause before deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setText(text.slice(0, -1))
        }, deletingSpeed)
      } else {
        // Move to next word
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeoutRef.current)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="pointer-events-none absolute inset-0 flex items-center px-4 py-3 text-slate-400 select-none overflow-hidden">
      <span>{text}</span>
      <span className="ml-px w-px h-5 bg-indigo-400 dark:bg-indigo-500 animate-[typewriter-cursor_0.8s_ease-in-out_infinite]" />
    </span>
  )
}
