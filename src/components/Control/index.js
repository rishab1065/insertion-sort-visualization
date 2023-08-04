import React from "react"
import "./index.css"

function Control({ name, setCurrentActiveStep }) {

    return <div className="control" onClick={setCurrentActiveStep}>{name}</div>
}

export default Control