import React, {useState} from "react";


const TableSearch = (props) => {

    const [value, setValue] = useState('')

    const valueChangeHandler = (event) => {
        setValue(event.target.value)

    }


    return (
        <div className="input-group mb-3 mt-3">

            <input type="text"
                   className="form-control"
                   value={value} onChange={valueChangeHandler}
            />

            <div className="input-group-prepend">

                <button className="btn btn-danger"
                        type="button"
                        onClick={() => props.onSearch(value)}
                >
                    Search

                </button>
            </div>

        </div>
    )
}


export default TableSearch
