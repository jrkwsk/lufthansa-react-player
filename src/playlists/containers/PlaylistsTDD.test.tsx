import { fireEvent, render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"
import { Playlist } from "../../model/Playlist"
import { PlaylistsTDD } from "./PlaylistsTDD"
import { fetchData } from './';

jest.mock('axios');

describe('PlaylistsTDD', () => {

    test('shows the search input', () => {
        render(<PlaylistsTDD />)
        // expect(screen.getByPlaceholderText('search')).toBeVisible();
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();

    });

    test('shows list of mock playlists', async () => {
        const data = {
            data: {
                playlits: [
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
            },
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(data))
        await expect(fetchData('react')).resolves.toEqual(data);

    });




    test('shows list of no playlists', () => {
        //zachowanie bardzo zbliżone do tego użytkownika, ale można może lepiej?
        render(<PlaylistsTDD />)
        fireEvent.click(screen.getAllByRole("button")[0]);
        expect(screen.getAllByRole("button")).toHaveLength(2);
        fireEvent.click(screen.getAllByRole("button")[0]);
        expect(screen.getAllByRole("button")).toHaveLength(1);
        fireEvent.click(screen.getAllByRole("button")[0]);
        // uwaga na get vs query a not.tobrinthedocument!!!!        
        expect(screen.queryAllByRole("button")).not.toBeInTheDocument;
    });


    test('selecting playlistlist from list shows details', () => {
        render(<PlaylistsTDD />)
        fireEvent.click(screen.getAllByTestId('playlist_item')[0]);
        expect(screen.getByTestId('playlist_description')).toBeInTheDocument();
    });

    test('clicking edit in details switches to form', () => {
        render(<PlaylistsTDD />)
        fireEvent.click(screen.getAllByTestId('playlist_item')[0]);
        expect(screen.getByTestId("edit_btn")).toHaveTextContent('Edit');
        fireEvent.click(screen.getByTestId("edit_btn"));
        expect(screen.queryByRole("textarea")).toBeInTheDocument;
    });
})







