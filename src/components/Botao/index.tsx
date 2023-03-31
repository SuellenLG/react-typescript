import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{
    children: React.ReactNode
    type?: "submit" | "reset" | "button" | undefined
}> {
    render() {
        const { type = "button" } = this.props

        return (
            <button type= {type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }

}

export default Botao;


/*
render() {
        const estaAtivo = true;
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red"
        }
        return (
            <button style={styles}>
                Botão
            </button>
*/