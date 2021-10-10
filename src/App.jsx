import React from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css'
import Items from './Items'


function App() {
    const [curr, setCurr] = useState("")
    const [items, setItems] = useState([])
    const response = (event) => {
        setCurr(event.target.value)
    }
    const add = () => {
        setItems((oldItems) => {
            return [...oldItems, curr]
        })
        setCurr("")
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((val, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />

                    <div className="heading">
                        <h3>ToDo List</h3>
                    </div>

                    <br />

                    <div className="operation">
                        <input type="text" placeholder="Add an item" onChange={response} value={curr} />
                        <button onClick={add} type="button" className="btn btn-warning" style={{ fontSize: "24px", height: "41px" }}>+</button>
                    </div>

                    <div className="content">
                        <ul>
                            {items.map((val, index) => {
                                return (
                                    <Items desc={val} id={index} onSelect={deleteItems} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App