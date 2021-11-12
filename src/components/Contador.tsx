import React, {Component} from "react";
import ContadorValor from "./ContadorValor";

interface propsContador{
    valorInicial?: number
}

interface iContadorState{
    valor: number
}


export default class Contador extends Component<propsContador, iContadorState> {
    public state = { valor: this.props.valorInicial || 0 }
    private addNumber = (delta: number) => {
        this.setState({
            valor: this.state.valor + delta
        })
    }

    render() {
        return (
            <>
            <ContadorValor contador={this.state.valor}/>
            <button onClick={() => this.addNumber(20)}>+</button>
            <button onClick={() => this.addNumber(-20)}>-</button>
            </>
        )
    }
}