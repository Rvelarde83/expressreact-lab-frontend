import { useState, useEffect } from "react";


function Projects(props){
   
    const [projects, setProjects]= useState(null);
    const getProjects= async() =>{
    const data = await fetch(props.URL+"projects").then(res =>res.json())
    setProjects(data);
}
useEffect(()=>{
    getProjects();
}, [])
console.log(projects)
const loaded=() =>(
    <div className="projects">
        {projects.map((project, index)=> 
        <div key={index}>
            <h1 className="p-name">{project.name}</h1>
            <img src={project.image} className="image-project"/>
            <a href={ project.git} target="_blank">
                <br></br>
                <button> Github</button>
            </a>
            <a href={project.live} target="_blank">
                <button>Live site</button>
            </a>
        </div>
        )}
    </div>
)
return projects ? loaded() : <h1 className="spin"> Loading...</h1>;
}
export default Projects;