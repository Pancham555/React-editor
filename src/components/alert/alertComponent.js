import React, { useEffect, useState } from 'react'

const AlertComponent = (props) => {
    const { title, txt, btn } = props?.data
    const [display, setdisplay] = useState(true)
    useEffect(() => {
        // setTimeout(() => {
        //     setdisplay(true)
        // }, 5000);
    }, [])
    return (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backdropFilter: "brightness(60%)", display: `${display ? "flex" : "none"}`, justifyContent: "center", zIndex: "1000" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ position: "relative", top: 0, left: 0, right: 0, bottom: 0, background: "white", padding: "10px", borderRadius: "10px", width: "20rem" }}>
                    <div style={{ position: "absolute", top: 0, right: "0", margin: "0rem 1rem", cursor: "pointer", fontSize: "2rem", fontWeight: "bold" }} onClick={() => setdisplay(false)}>&times;</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: "bold", margin: "0.5rem" }}>{title}</div>
                    <div style={{ margin: "0.5rem" }}>
                        {txt}
                    </div>
                    <div style={{ display: "inline-block", borderRadius: "8px", background: "rgb(44, 110, 242)", padding: "10px 20px", color: "white", cursor: "pointer", margin: "0.5rem" }}>{btn}</div>
                </div>
            </div>
        </div >
    )
}

export default AlertComponent
