import { Meta, Story } from "@storybook/react";
import { PlaylistList } from "./PlaylistList";


export default {
    title: 'Playlists/List',
    component: PlaylistList,
    decorators: [
        Story => <div style={{ maxWidth: 500, margin: '0 auto', border: '1px solid black', }} ><Story /></div>
    ]
} as Meta

const Template = (args: any) => <PlaylistList {...args} />

export const List = Template.bind({})


List.args = {
    playlists: [
        {
            id: '123',
            name: 'Playlista 😇',
            public: true,
            description: 'no i co ja dzis polubie?..🤔'
        },
        {
            id: '234',
            name: 'Playlista 😁',
            public: false,
            description: 'moze polubię TypeScript?. 🚀'
        },
        {
            id: '345',
            name: 'Playlista 😆',
            public: true,
            description: 'albo wszystko polubię co mi tam 😅💖'
        },
    ],
    selectedId: '123'
}