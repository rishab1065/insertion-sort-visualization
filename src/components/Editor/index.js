import React from "react"
import { useState } from "react";
import Bar from "../Bar";
import Control from "../Control";

import "./index.css"

function getDataForVisulaization(numbers) {

    const data = []

    for (let i = 1; i < numbers.length; i += 1) {

        data.push({ currentState: [...numbers], activeElementIndex: i, })

        for (let j = i; j > 0; j -= 1) {
            if (numbers[j - 1] > numbers[j]) {

                const temp = numbers[j - 1];
                numbers[j - 1] = numbers[j];
                numbers[j] = temp;

                data.push({ currentState: [...numbers], activeElementIndex: j - 1 })
            }
        }

    }

    return data

}

function Editor(props) {

    const [currentActiveStep, setCurrentActiveStep] = useState(0)

    const data = getDataForVisulaization([83, 6, 63, 84, 9, 14, 90, 24, 17])

    const { currentState, activeElementIndex } = data[currentActiveStep]

    console.log(currentState, data, currentActiveStep, "currentState")

    return (
        <div className="editor-container">
            <div>
                <span>{`Move ${currentActiveStep + 1} of ${data.length} `}</span>
            </div>
            <div className="bar-container">
                {currentState.map((element, index) => {
                    return <Bar element={element} isActive={index === activeElementIndex} index={index} />
                })}
            </div>
            <div className="controls-container">
                <Control name={"Previous"} setCurrentActiveStep={() => {
                    if (currentActiveStep > 0) {
                        setCurrentActiveStep(currentActiveStep - 1)
                    }
                }} />
                <Control name={"Next"} setCurrentActiveStep={() => {
                    if (currentActiveStep < data.length) {
                        setCurrentActiveStep(currentActiveStep + 1)
                    }
                }} />
            </div>
        </div>
    )
}

export default Editor