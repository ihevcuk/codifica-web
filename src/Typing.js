import React, { useState, useEffect } from 'react'
import './Typing.css'

function Typing(props) {
    const value = props.text.split('')
    const [text, setText] = useState('')
    const speed = props.speed || 300

    useEffect(() => {
        let used = 0
        const interval = setInterval(() => {
            setText(text => {
                if (text.length === value.length) {
                    clearInterval(interval)
                    return text
                }
                return text + value[used]
            })
            used = (used + 1) % value.length
        }, speed);
      }, []);

    

    return text.toUpperCase()
}

export default Typing;