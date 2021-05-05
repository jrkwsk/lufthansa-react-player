//dodaje do elementów atrybut dragable
//dodaje eventlistener do elementów listy na dragstart / dragend
// zmienia state todo i done

import { useEffect } from "react"
// import styles from './DragAndDrop.module.css'


export const useDragAndDrop = () => {

    useEffect(() => {

        const dragItems = document.querySelectorAll('li');

        dragItems.forEach(item => {
            item.setAttribute('draggable', 'true')

            item.addEventListener('dragstart', () => { item.classList.add('dragging') })
            item.addEventListener('dragend', () => { item.classList.remove('dragging') })
        })

        const dragAreas = document.querySelectorAll('ul');
        dragAreas.forEach(area => {
            area.classList.add('drag-area');

            area.addEventListener('dragover', (e) => {
                e.preventDefault();
                let draggedItem = document.querySelector('.dragging');
                if (draggedItem) {
                    area.appendChild(draggedItem);
                }
            })
        }

        );

    }, [])


}

