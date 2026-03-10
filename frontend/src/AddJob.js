import React,{useState} from "react";
import axios from "axios";

function AddJob(){

const [company,setCompany]=useState("");
const [position,setPosition]=useState("");
const [status,setStatus]=useState("");
const [notes,setNotes]=useState("");

const addJob = async ()=>{

await axios.post("http://127.0.0.1:5000/applications",{
company,
position,
status,
notes
});

alert("Application Added");

}

return(

<div>

<input placeholder="Company"
onChange={(e)=>setCompany(e.target.value)}/>

<input placeholder="Position"
onChange={(e)=>setPosition(e.target.value)}/>

<input placeholder="Status"
onChange={(e)=>setStatus(e.target.value)}/>

<input placeholder="Notes"
onChange={(e)=>setNotes(e.target.value)}/>

<button onClick={addJob}>Add</button>

</div>

)

}

export default AddJob;import React,{useState} from "react";
import axios from "axios";

function AddJob(){

const [company,setCompany]=useState("");
const [position,setPosition]=useState("");
const [status,setStatus]=useState("");
const [notes,setNotes]=useState("");

const addJob = async ()=>{

await axios.post("http://127.0.0.1:5000/applications",{
company,
position,
status,
notes
});

alert("Application Added");

}

return(

<div>

<input placeholder="Company"
onChange={(e)=>setCompany(e.target.value)}/>

<input placeholder="Position"
onChange={(e)=>setPosition(e.target.value)}/>

<input placeholder="Status"
onChange={(e)=>setStatus(e.target.value)}/>

<input placeholder="Notes"
onChange={(e)=>setNotes(e.target.value)}/>

<button onClick={addJob}>Add</button>

</div>

)

}

export default AddJob;
