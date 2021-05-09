import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MyImage } from './MyImage';
import { MemoryRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      color: string;
      background: string
    };
  }
}

const theme: DefaultTheme = {
  primary: {
    color: 'yellow',
    background: 'black'
  }
}

export default {
  title: 'Core/MyImage',
  component: MyImage,
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

const Template: Story<Parameters<typeof MyImage>[0]> = (args) => <MyImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
};


