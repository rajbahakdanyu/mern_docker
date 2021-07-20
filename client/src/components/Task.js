import React from "react"
import { FaTimes } from "react-icons/fa"

const Task = () => {
    return (
        <div className={`task reminder`}>
            <h3>
                Task Name
                <FaTimes style={{ color: "red" }} />
            </h3>
        </div>
    )
}

export default Task
