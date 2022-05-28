import { useState, useEffect } from "react";


function About(props) {
    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        setAbout(data);
    };
    
    useEffect(()=>{
        getAboutData();
    }, [])
    console.log(about)

    const loaded = () => (
        <div className="about">
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <img src={about.headshot} className="headshot" />
            <p>{about.bio}</p>
        </div>
    );

    return about ? loaded() : <h1 className="spin" >Loading...</h1>;
};

export default About;