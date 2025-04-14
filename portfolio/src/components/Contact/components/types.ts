import { ChangeEvent } from "react"

export interface FormInputProps {
  id: string
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  type?: string
  inputMode?: "text" | "email" | "tel" | "url" | "search" | "none"
  placeholder?: string
  isTextarea?: boolean
}

export interface FormStatusProps {
  status: "idle" | "success" | "error"
}

export interface SubmitButtonProps {
  isSubmitting: boolean
}

export interface SubjectSelectorProps {
  options: string[]
  selectedSubject: string
  onChange: (subject: string) => void
}
