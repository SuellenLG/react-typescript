import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{
    children: React.ReactNode
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props

        return (
            <button onClick={onClick} type= {type} className={style.botao}>
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