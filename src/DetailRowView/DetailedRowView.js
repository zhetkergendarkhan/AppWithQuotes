import React from "react";



const DetailedRowView = (props) => {
    return (
        <div>
            <p>ID <b>{props.person.id}</b></p>
            <p>USERID <b>{props.person.userId}</b></p>
            <p>TITLE <b>{props.person.title}</b></p>
        </div>
    )
}


export default DetailedRowView;


