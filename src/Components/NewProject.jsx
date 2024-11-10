import { data } from "autoprefixer";
import Input from "./Input.jsx"
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value; 
        const enteredDueDate = dueDate.current.value;


    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
        //show error model
        Modal.current.open();
        return;
    }


        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
             });
    }


    return (
        <>
        <Modal  ref={Modal} buttonCaption="Okay">
            <h2>Invalid Input</h2>
            <p>Opps looks like you forgot to enter a value.</p>
            <p>Please make sure you provide a valid value for every input field.</p>
        </Modal>
       
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text -stone-950">Cancle</button>
            </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handleSave}
                >Save</button>
            </li>
        </menu>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="Due Date" />
    </div>
    </>
    )
}