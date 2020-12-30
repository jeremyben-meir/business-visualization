import React, { useState, useEffect } from "react";
import Popup from 'react-animated-popup'

export default function Map() {
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <button onClick={handleClick}>click me</button>
            <Popup visible={visible} onClose={() => setVisible(false)}>
                <p>I am a popup!</p>
            </Popup>
        </div>
    );
}
