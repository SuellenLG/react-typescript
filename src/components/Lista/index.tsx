import React from "react";
import Item from "./Item";
import style from './Lista.module.scss'

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }];

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}

            </ul>
        </aside>
    )
}

export default Lista;


/*

outra forma de escrever:
1)utilizar todos os atributos que existem dentro daquele objeto como prop para esse componente

{tarefas.map((item, index) => (
                    <Item
                        {...item}
                    />


*/