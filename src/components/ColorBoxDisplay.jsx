import React from 'react'

const ColorBoxDisplay = (props) => {
    return (
        <div>
            {
                props.newColor.map((newColor, i) => {
                    return (
                        <h1 key={i} style={{ color: newColor }}>Not a Box</h1>
                    )
                }
                )
            }
        </div>
    )
}

export default ColorBoxDisplay