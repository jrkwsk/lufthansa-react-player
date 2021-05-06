//dodaje do elementów atrybut dragable
//dodaje eventlistener do elementów listy na dragstart / dragend
// zmienia state todo i done

import { useEffect, useRef, useState } from "react"
// import styles from './DragAndDrop.module.css'


export const useDragAndDrop = (initialState: string[]) => {
    const [items, setItems] = useState(initialState)
    const ref = useRef(null)

    useEffect(() => {
        if (!ref.current) { return }
        //selects element to be container
        const area = ref.current as unknown as HTMLElement;
        //selects all children to make them dragable
        const dragItems = (ref.current as unknown as HTMLElement).children;

        [...dragItems].forEach(item => {
            item.setAttribute('draggable', 'true');
            item.addEventListener('dragstart', () => { item.classList.add('currently-dragging') });
            item.addEventListener('dragend', () => { item.classList.remove('currently-dragging') });
        })


        area.classList.add('drag-area');
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        area.addEventListener('drop', (e) => {
            let draggedItem = document.querySelector('.currently-dragging');
            if (draggedItem) {
                setItems(items => [...items, (draggedItem as HTMLElement).dataset['item']!])
            }
        })


    }, [])

    return { items, ref }


}

