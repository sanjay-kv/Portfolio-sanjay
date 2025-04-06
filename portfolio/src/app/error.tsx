'use client'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.log('Error:', error)
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error
