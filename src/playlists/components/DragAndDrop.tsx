import React, { useState } from 'react'
import { useDragAndDrop } from '../../core/hooks/useDragAndDrop'


interface Props {

}

const mocktodo = ['aaa', 'bbb', 'ccc', 'ddd']
const mockdone = ['eee', 'fff', 'ggg', 'hhh']

export const DragAndDrop = (props: Props) => {
    //na razie niepotrzebne
    const [todo, settodo] = useState(mocktodo)
    const [done, setdone] = useState(mockdone)

    useDragAndDrop('.dragable-container')

    return (
        <div className="container">
            <div className="row m-5">
                <div className="col p-4 m-4 border">
                    <h5>TO DO</h5>
                    <ul className="list-group dragable-container" id="todo-list">
                        {todo.map(el => <li className="list-group-item" key={el}>{el}</li>)}
                    </ul>
                </div>
                <div className="col p-4 m-4 border">
                    <h5>DONE WELL</h5>
                    <ul className="list-group dragable-container" id="done-list">
                        {done.map(el => <li className="list-group-item" key={el}>{el}</li>)}


                    </ul>
                </div>
                <div className="col p-4 m-4 border">
                    <h5>DONE OK</h5>
                    <ul className="list-group dragable-container" id="done-list">
                        {done.map(el => <li className="list-group-item" key={el}>{el}</li>)}


                    </ul>
                </div>
            </div>
        </div>
    )
}
