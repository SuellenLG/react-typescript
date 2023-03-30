import style from '../Lista.module.scss'

export default function Item(props: { tarefa: string, tempo: string}) {
    const {tarefa, tempo} = props;
    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}

/*

outra forma de escrever:
1) para economizar linhas
export default function Item({tarefa, tempo}: { tarefa: string, tempo: string}) {
    ....
}


*/