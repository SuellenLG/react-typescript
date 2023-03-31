import Item from "./Item";
import style from './Lista.module.scss'

interface Itarefa {
    tarefa: string,
    tempo: string
}

function Lista({ tarefas}:{ tarefas: Itarefa[]}) {
    
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