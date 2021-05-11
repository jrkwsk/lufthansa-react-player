import React from 'react';
import { MyListItem } from './MyListItem';
import { MyList } from './MyList';

import { Primary, Secondary } from './MyListItem.stories';

const Template = ({ items, ...args }) => (
    <MyList>
        {items.map((item) => (
            <MyListItem {...item} />
        ))}
    </MyList>
);


export default {
    title: 'Core/MyList',
    subcomponents: { MyListItem },
    component: { MyList }
}
