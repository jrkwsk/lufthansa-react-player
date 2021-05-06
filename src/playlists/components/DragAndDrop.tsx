import React, { useState } from 'react'
import { useDragAndDrop } from '../../core/hooks/useDragAndDrop'


interface Props {

}

const mocktodo = ['aaa', 'bbb', 'ccc', 'ddd']
const mockdone = ['eee', 'fff', 'ggg', 'hhh']

export const DragAndDrop = (props: Props) => {
    //na razie niepotrzebne

    const { items: todos, ref: ref1 } = useDragAndDrop(mocktodo)
    const { items: done, ref: ref2 } = useDragAndDrop(mocktodo)
    const { items: well, ref: ref3 } = useDragAndDrop(mocktodo)


    return (
        <div className="container">
            <div className="row m-5">
                <div className="col p-4 m-4 border">
                    <h5>TO DO</h5>
                    <ul className="list-group dragable-container1" id="todo-list" ref={ref1}>
                        {todos.map(el => <li data-item={el} className="list-group-item" key={el}>{el}</li>)}
                    </ul>
                </div>
                <div className="col p-4 m-4 border">
                    <h5>DONE WELL</h5>
                    <ul className="list-group dragable-container2" id="done-list" ref={ref2}>
                        {done.map(el => <li data-item={el} className="list-group-item" key={el}>{el}</li>)}


                    </ul>
                </div>
                <div className="col p-4 m-4 border">
                    <h5>DONE OK</h5>
                    <ul className="list-group dragable-container3" id="done-list" ref={ref3}>
                        {well.map(el => <li data-item={el} className="list-group-item" key={el}>{el}</li>)}


                    </ul>
                </div>
            </div>
        </div>
    )
}
