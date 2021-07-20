import React from "react"
import { FaTimes } from "react-icons/fa"

const Task = ({ task }) => {
    return (
        <div className={`task ${task.completed ? "reminder" : ""}`}>
            <h3>
                {task.title}
                <FaTimes style={{ color: "red" }} />
            </h3>
        </div>
    )
}

export default Task
