import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const ApiComponent = (props) => {
    const { link } = props?.data
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get(`${link}`).then((res) => {
            setState(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [link])
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {state.map((prop) => {
                return (
                    <div onClick={() => console.log(link)} key={prop.id} style={{ border: "1.2px solid black", borderRadius: "0.2rem", padding: "10px 20px", background: "white", margin: "0.5rem", display: "inline-block", width: "24rem" }}>
                        <div style={{ fontSize: "1.5rem", padding: "10px", margin: "10px", display: "inline-block" }}>{prop.name}</div>
                        <div style={{ margin: "10px", display: "inline-block" }}>
                            {prop.work}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ApiComponent
