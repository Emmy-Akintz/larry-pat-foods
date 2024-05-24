import { useState } from "react"

export default function InputMaker(type, id, label, stater) {
    return (
        <div>
            <label for={id}>{label}</label>
            <input type={type} id={id}></input>
        </div>
    )
}