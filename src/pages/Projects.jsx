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
    <div>
        {projects.map((project, index)=> 
        <div key={index}>
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <a href={ project.git}>
                <button> Github</button>
            </a>
            <a href={project.live}>
                <button>live site</button>
            </a>
        </div>
        )}
    </div>
)
return projects ? loaded() : <h1 className="spin"> Loading...</h1>;
}
export default Projects;