import { useState, useEffect } from "react"

import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
    const [tasks, setTasks] = useState([])

    // Fetch tasks
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/api/v1/", {
            method: "GET",
        })
        const data = await res.json()

        return data
    }

    return (
        <div className='container'>
            <Header />
            <Tasks />
        </div>
    )
}

export default App
