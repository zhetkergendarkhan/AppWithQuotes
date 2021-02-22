import React from "react";


const Table=(props)=>{
    return(
        <table className="table">
            <thead>
            <tr>
                <th onClick={props.onSort.bind(null,'userId')}>userId
                    {props.sortField==='userId' ? <small>{props.sort}</small> : null }
                </th>
                <th onClick={props.onSort.bind(null,'id')}>id
                    {props.sortField==='id' ? <small>{props.sort}</small> : null }
                </th>
                <th onClick={props.onSort.bind(null,'title')}>title
                    {props.sortField==='title' ? <small>{props.sort}</small> : null }
                </th>
            </tr>
            </thead>

            <tbody>
            {props.data.map(item=>(
                <tr key={item.id} onClick={props.onRowSelect.bind(null,item)}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}


export default Table
