import React from 'react';

function Filter({ classes, applyFilter }) {
    return (
    <div>
    <h2>Filter By Class:</h2>
    {classes.map(cls => (
    <div key={cls}>
    <input type="checkbox" id={cls} onChange={() => applyFilter(cls)} />
    <label htmlFor={cls}>{cls}</label>
    </div>
    ))}
    </div>
    );
    }

export default Filter