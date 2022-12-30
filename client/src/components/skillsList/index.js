import React from 'react';

export default function skill ({skills}) {
    if (!skills.length) {return <h3>no listed skills</h3>}

    return (
        skills.map((skill) => {
            return (
                <li>{skill}</li>
            )
        })
    )
}