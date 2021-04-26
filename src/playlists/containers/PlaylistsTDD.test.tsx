import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import { Playlist } from "../../model/Playlist"
import { PlaylistsTDD } from "./PlaylistsTDD"

import { PlaylistList } from "../components/PlaylistList"



describe('PlaylistsTDD', () => {

    test('shows the search input', () => {
        render(<PlaylistsTDD />)
        // expect(screen.getByPlaceholderText('search')).toBeVisible();
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();

    });

    // test('shows list of mock playlists', () => {

    //     // act(() => {
    //     const mockPlaylists: Playlist[] = [
    //         {
    //             id: '111',
    //             name: 'Playlista 111',
    //             public: true,
    //             description: '111 xxx 111'
    //         },
    //         {
    //             id: '222',
    //             name: 'Playlista 222',
    //             public: false,
    //             description: '222 xxx 333'
    //         }
    //     ]

    //     const selectSpy = jest.fn()
    //     const removeSpy = jest.fn();

    //     render(<PlaylistList playlists={mockPlaylists} onSelected={selectSpy} onRemove={removeSpy} />)
    //     // render(<PlaylistsTDD />)

    //     const listItems = screen.getAllByTestId('playlist_item')
    //     expect(listItems[0]).toHaveTextContent('111')
    //     expect(listItems[1]).toHaveTextContent('222')
    //     expect(listItems).toHaveLength(2)
    //     // })

    //     //promise:
    //     // const listItems = screen.findAllByTestId('playlist_item')
    //     // expect(listItems).toHaveLength(3)


    // });


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







