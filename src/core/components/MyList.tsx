import React from 'react'
import { MyListItem } from './MyListItem';


interface Props {
    myColors: any
}

export const MyList = ({ myColors }: Props) => {

    // const myColors = [{
    //     id: "123",
    //     color: "red",
    //     value: "#f00",
    //     mode: "background"
    // }, {
    //     id: "456",
    //     color: "red",
    //     value: "#f00",
    //     mode: "background"
    // }]


    if (myColors.length === 0) {
        return <div className="list-items">empty</div>;
    }

    return (
        <div className="list-items">
            { myColors.map((item: { id: any; color: any; value: any; mode: any; }) =>

            (<MyListItem
                id={item.id}
                color={item.color}
                value={item.value}
                mode={item.mode}
            />))}

        </div>
    )

}
