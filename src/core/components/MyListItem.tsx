import React, { } from 'react'

interface Props {
    myColors: any;

}

export const MyListItem = ({ myColors: { id, color, value, mode } }) => {



    const colorRandom = (e: any) => {
        console.log('color fn');
        console.log(e.target)
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const z = Math.floor(Math.random() * 100);
        const bgColor = "rgb(" + x + "," + y + "," + z + ")";
        e.target.style.backgroundColor = bgColor;
        console.log(bgColor)
    }

    return (
        <div>

            {/* {myColors.map(el =>
                    <li
                        className="list-group-item"
                        key={el.id}
                        mode={mode}
                        onClick={(e) => colorRandom(e)}>{el.color} {el.value}
                    </li>)} */}
            <li className="list-group-item"
                key={id}
                mode={mode}
                onClick={(e) => colorRandom(e)}>{color} {value}</li>

        </div>
    )
}
