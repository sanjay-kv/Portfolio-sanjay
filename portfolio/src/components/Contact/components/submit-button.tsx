import { SubmitButtonProps } from "./types"

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`flex items-center justify-center bg-[#1DA1F2] hover:bg-blue-600
        text-foreground py-3 px-6 rounded-lg transition-colors duration-300
        ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-foreground"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </span>
      ) : (
        <p>Send Message</p>
      )}
    </button>
  )
}
