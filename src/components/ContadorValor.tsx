import React from "react"

interface ContadorProps {
    contador: number
}



export default function Contador(props: ContadorProps) {
    return (
        <p>{props.contador}</p>
    )
}