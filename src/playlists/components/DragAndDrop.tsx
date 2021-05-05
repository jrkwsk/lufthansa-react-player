import React, { useState } from 'react'
import { useDragAndDrop } from '../../core/hooks/useDragAndDrop'


interface Props {

}

const mocktodo = ['aaa', 'bbb', 'ccc', 'ddd']
const mockdone = ['eee', 'fff', 'ggg', 'hhh']

export const DragAndDrop = (props: Props) => {
    const [todo, settodo] = useState(mocktodo)
    const [done, setdone] = useState(mockdone)

    useDragAndDrop()



    return (
        <div className="container">
            <div className="row m-5">
                <div className="col p-5 m-5 border">
                    <h2>TO DO</h2>
                    <ul className="list-group" id="todo-list">
                        {todo.map(el => <li className="list-group-item" key={el}>{el}</li>)}
                    </ul>
                </div>
                <div className="col p-5 m-5 border">
                    <h2>DONE</h2>
                    <ul className="list-group" id="done-list">
                        {done.map(el => <li className="list-group-item" key={el}>{el}</li>)}


                    </ul>
                </div>
            </div>
        </div>
    )
}
