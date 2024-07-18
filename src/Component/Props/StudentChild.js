import React from  'react';

export default function StudentChild (props){
    return(
        <div>
            <h2>Props Topic</h2>
            <h4>Student Page</h4>
            <p>Student name: {props.name}</p>
            <p>Student email: {props.email}</p>
            <p>Student phone: {props.phone}</p>
        </div>
    )
}