import React from "react";
import style from './Botao.module.scss'

interface Props {
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void,
    children: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}>
            {children}
        </button>
    )
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