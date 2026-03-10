import React,{useEffect,useState} from "react";
import axios from "axios";

function JobList(){

const [jobs,setJobs]=useState([]);

const fetchJobs = async ()=>{

const res = await axios.get("http://127.0.0.1:5000/applications");

setJobs(res.data);

}

useEffect(()=>{
fetchJobs();
},[])

const deleteJob = async(id)=>{

await axios.delete(`http://127.0.0.1:5000/applications/${id}`);

fetchJobs();

}

return(

<ul>

{jobs.map(job=>(
<li key={job.id}>

{job.company} - {job.position} - {job.status}

<button onClick={()=>deleteJob(job.id)}>Delete</button>

</li>
))}

</ul>

)

}

export default JobList;
