import React from 'react';
import { useReducer } from 'react';

let initialVal = 0;
let initVal = { like: 0, dislike: 0 };
const counter = (state, action) => {
    switch(action.type){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialVal;
        default:
            return state;
    }
}
const LikeAndDislike = (state, action) => {
    switch (action.type) {
        case 'like':
            return { like: state.like + 1, dislike: state.dislike };
        case 'dislike':
            return { like: state.like, dislike: state.dislike + 1 };
        case 'reset':
            return initVal;
        default:
            return state;
    }
}
const Reducer = () => {
   const [count, dispatch] = React.useReducer(counter, initialVal);//syntax: useReducer(reducer, initialState)
   const [likeAndDislike, dispatchLikeAndDislike] = React.useReducer(LikeAndDislike, initVal);

   return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment(+)</button><br/><br />
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement(-)</button><br /><br />
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button><br /><br />
            <hr />
            <h1>Like Count: {likeAndDislike.like} </h1>
            <h1>Dislike Count: {likeAndDislike.dislike}</h1>
            <button onClick={() => dispatchLikeAndDislike({ type: 'like' })}>Like👍❤️</button><br /><br />
            <button onClick={() => dispatchLikeAndDislike({ type: 'dislike' })}>DisLike👎💔</button>
            <br /><br />
            <button onClick={() => dispatchLikeAndDislike({ type: 'reset' })}>Reset</button>
            <br /><br />
            <hr />
        </div>
    )
}
export default Reducer;