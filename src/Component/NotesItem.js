import React,{ useContext } from "react";
import noteContext from "../context/notes/noteContext";
function NodeItems(props) {
  const {note,updateNotes} = props;

  const context = useContext(noteContext);
  const {DeleteNote} = context;
  return (
    <>
 
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">

            <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5> 
            <i className="fa-solid fa-trash-can mx-2" onClick={()=>{DeleteNote(note._id); props.showAlert("Deleted Successfully","success");}}></i>  
            <i className="fa-sharp fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNotes(note)}} ></i>  
            </div>
         

          <p className="card-text">{note.description}</p>
           
          </div>
      </div>
      </div>
    </>
  );
}

export default NodeItems;
