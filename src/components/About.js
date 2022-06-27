import React from "react";

function About({ img, about}) {
    return (
        <aside>
            {img ? <img src={img} alt="blog logo" /> : <img src='https://via.placeholder.com/215' alt="blog logo" />}
            <p>{about}</p>
        </aside>
    )
}

export default About;