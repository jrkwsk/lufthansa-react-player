import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MyList } from './MyList';
import { MemoryRouter, Link, NavLink } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';



const theme: DefaultTheme = {
    Darkmode: {
        color: 'yellow',
        background: 'black'
    }
}

export default {
    title: 'Core/MyList',
    component: MyList,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => {
            return <MemoryRouter> {/* <Story /> */}
                {Story()}
            </MemoryRouter>
        },
        (Story) => {
            return <ThemeProvider theme={theme}>
                {Story()}
            </ThemeProvider>
        }
    ]
} as Meta;

const Template: Story<Parameters<typeof MyList>[0]> = (args) => <MyList {...args} />;

export const Darkmode = Template.bind({});
Darkmode.args = {
    target: "_blank",
    rel: "noopener",
    darkmode: true,
    children: 'Darkmode',
};

