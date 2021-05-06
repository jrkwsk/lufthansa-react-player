//dodaje do elementów atrybut dragable
//dodaje eventlistener do elementów listy na dragstart / dragend
// zmienia state todo i done

import { useEffect } from "react"
// import styles from './DragAndDrop.module.css'


export const useDragAndDrop = (classOfContainer: string) => {

    useEffect(() => {
        //selects element to be container
        const dragAreas = document.querySelectorAll(classOfContainer);
        //selects all children to make them dragable
        const dragItems = document.querySelectorAll(`${classOfContainer} > *`);

        dragItems.forEach(item => {
            item.setAttribute('draggable', 'true');
            item.addEventListener('dragstart', () => { item.classList.add('currently-dragging') });
            item.addEventListener('dragend', () => { item.classList.remove('currently-dragging') });
        })

        dragAreas.forEach(area => {
            area.classList.add('drag-area');

            area.addEventListener('dragover', (e) => {
                e.preventDefault();
                let draggedItem = document.querySelector('.currently-dragging');
                if (draggedItem) {
                    area.appendChild(draggedItem);
                }
            })
        }

        );

    }, [classOfContainer])


}

