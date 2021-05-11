import React from 'react';
import { ListItem } from './ListItem';


const Template = (args: any) => <ListItem {...args} />;

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
    title: 'Core/ListItem',
}
