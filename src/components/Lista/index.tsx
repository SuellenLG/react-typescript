import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props){
  
  return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
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
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />


*/