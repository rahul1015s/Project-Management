import notepad  from "../assets/notepad.svg"
import Button from "./Button.jsx"
import { useRef } from "react"

export default function NoProjectSelected({ onStartAddProject }) {


    
    return <div className="mt-24 text-center w-2/3">
        <img src={notepad} alt="Empty task list" className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or start with a new one</p>
        <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
        </p>
    </div>
}