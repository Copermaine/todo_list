import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}
export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
    /*const [title, setTitle] = useState<string>(''); //string явное указание для TS тип данных
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => { //ChangeEvent явное указание для TS тип данных
        setTitle(event.target.value)
    }*/
    const ref = useRef<HTMLInputElement>(null)
    const keyHandler = (event: React.KeyboardEvent) => { //тип для работы с клавиатурой
        if (event.key === 'Enter') {
            //console.log(title)
            //setTitle('')
            props.onAdd(ref.current!.value) //! игнорировать ошибку
            ref.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input ref={ref}
                //value={title}
                //onChange={changeHandler}
                   type="text" id="title"
                   placeholder="Enter task name"
                   onKeyPress={keyHandler}/>
            <label htmlFor="title" className="active">Enter task name</label>
        </div>
    )
}