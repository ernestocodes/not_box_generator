import React, {useState} from 'react'


const ColorBoxForm = (props) => {
    const[color, setColor] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(color)
        props.onNewColor(color)
        setColor("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="color" name="color" value={color}
                onChange={(e)=>setColor(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default ColorBoxForm