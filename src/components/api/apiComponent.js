import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const ApiComponent = (props) => {
    const { link } = props?.data
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/").then((res) => {
            setState(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {state.map((prop) => {
                return (
                    <div key={prop.id} style={{ color: "red", border: "2px solid black", borderRadius: "1rem", padding: "10px 20px" }}>{prop.name}</div>
                )
            })}
        </div>
    )
}

export default ApiComponent
