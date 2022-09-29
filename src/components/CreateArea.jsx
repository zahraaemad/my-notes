import React, { useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";


function CreateArea(props) {


    const [addNote, setAddNote] = useState({
        title: "",
        content: ""
    });
  


    function addnote(event) {
        const { name, value } = event.target;
        setAddNote((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })

    }

    function submit(event) {
        event.preventDefault();
        props.onAddd(addNote)
        setAddNote({
            title: "",
            content: ""
        });


    }

    return (
        <div>
            <form className="create-note">
                <input onChange={addnote} name="title" placeholder="Title" value={addNote.title} />
                <textarea onChange={addnote} name="content" placeholder="Take a note..." rows="3" value={addNote.content} />
                <Fab onClick={submit} >  <AddIcon /></Fab>
            </form>
        </div>
    );
}

export default CreateArea;
