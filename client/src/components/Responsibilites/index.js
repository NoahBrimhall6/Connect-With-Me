import React from 'react';

export default function responsibility ({responsibilities}) {
    if (!responsibilities.length) {return <h3>no listed skills</h3>}

    return (
        responsibilities.map((responsibility) => {
            return (
                <li>{responsibility}</li>
            )
        })
    )
}