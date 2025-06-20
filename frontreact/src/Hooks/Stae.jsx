import React from 'react'
import { useState } from 'react'
import './Stae.css'

const State = () => {
    const [count, setCount] = React.useState(0);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <h1>LikeCount:{likeCount}</h1>
        <button onClick={() => setLikeCount(likeCount + 1)}>Like👍❤️</button>
        <h1>DislikeCount:{dislikeCount}</h1>
        <button onClick={() => setDislikeCount(dislikeCount - 1)}>DisLike👎❤️💔</button>
    </div>
  )
}

export default State
