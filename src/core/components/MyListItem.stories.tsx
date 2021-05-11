import React from 'react';
import { MyListItem } from './MyListItem';


const Template = (args: any) => <MyListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    myColors: {
        id: '123',
        color: "red",
        value: "#f00",
        mode: 'background'
    }
}

export const Secondary = Template.bind({});
Secondary.args = {
    myColors: {
        ...Primary.args.myColors,
        mode: 'letters'
    },
};

export default {
    title: 'Core/MyListItem',
}
