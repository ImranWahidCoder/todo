import React from 'react'

function Items(props) {
    return (
        <>
            <div className="el">

                <button onClick={() => {
                    props.onSelect(props.id)
                }} className="btn btn-danger">x</button>

                <li>{props.desc}</li>
            </div>
        </>
    );
}

export default Items