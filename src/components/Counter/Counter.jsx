import { useEffect, useState, useReducer } from 'react'

const intitalValue = { currentCount: 0 }
const pinkRGB = `rgb(236, 72, 153)`

function countReducer(count, action) {
  switch (action.type) {
    case 'incremented': {
      return { currentCount: count.currentCount + 1 }
    }
    case 'decremented': {
      return { currentCount: count.currentCount - 1 }
    }
    case 'reset': {
      return { currentCount: 0 }
    }
    default: {
      throw Error(`Uknown action: ${action.type}`)
    }
  }
}
export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, intitalValue)
  const [currentColor, setCurrentColor] = useState(pinkRGB)

  useEffect(() => {
    if (count.currentCount === 0) {
      setCurrentColor(pinkRGB)
    }

    if (count.currentCount > 0) {
      setCurrentColor(`rgb(52, 211, 153)`)
    }

    if (count.currentCount < 0) {
      setCurrentColor(`rgb(239, 68, 68)`)
    }
  }, [count.currentCount])

  const increment = () => {
    dispatch({
      type: 'incremented',
    })
  }

  const decrement = () => {
    dispatch({
      type: 'decremented',
    })
  }

  const reset = () => {
    dispatch({
      type: 'reset',
    })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor }}>
        {count.currentCount}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
