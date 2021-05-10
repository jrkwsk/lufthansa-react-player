import React, { } from 'react'

interface Props {

}

const listData = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]

export const MyList = (props: Props) => {

    var colorRandom = (e) => {
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

            <ul className="list-group">
                {listData.map(el =>
                    <li
                        className="list-group-item"
                        key={el.color}
                        onClick={(e) => colorRandom(e)}>{el.color}
                    </li>)}
            </ul>

        </div>
    )
}
