import React, {useState, useEffect} from 'react'

const Countdown = ({limit}) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let myInterval
        if(counter !== limit) {
            myInterval = setTimeout(() => {
                setCounter(prevCount => prevCount + 1)
            }, 0)
        }
       
        return () => {
            if(counter === limit) {
                setCounter(limit)
                clearInterval(myInterval)
            }
        }
    })

    return (
        <h1 className="counter__count">
            {counter}
        </h1>
    )
}

export default Countdown
