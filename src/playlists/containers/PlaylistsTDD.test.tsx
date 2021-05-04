import { fireEvent, render, screen } from "@testing-library/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import axios from 'axios'
// import { promises } from "node:dns";
// import { useFetch } from "../../core/hooks/useFetch";
// import { fetchPlaylists } from "../../core/hooks/usePlaylists";
import { Playlist } from "../../model/Playlist";
import { PlaylistsTDD } from "./PlaylistsTDD";

import { rest } from 'msw'
import { setupServer } from 'msw/node'


// jest.mock("../../core/hooks/usePlaylists")


describe('PlaylistsTDD', () => {

    // https://mswjs.io/docs/getting-started/mocks/rest-api
    const server = setupServer(
        rest.get('https://api.spotify.com/v1/me/playlists', (req, res, ctx) => {
            const mockPlaylists: Playlist[] = [
                { id: '123', name: 'TestTitle 1', description: '', public: false },
                { id: '234', name: 'TestTitle 2', description: '', public: false },
            ];
            ctx.delay(500)
            return res(ctx.json(mockPlaylists))
        }


        ),
        // https://mswjs.io/docs/basics/request-matching
        // GET https://api.spotify.com/v1/playlists/:playlist_id
        // req.params.playlist_id

        // PUT https://api.spotify.com/v1/playlists/:playlist_id
        // req.params.playlist_id
    )

    // Enable API mocking before tests.
    beforeAll(() => server.listen())

    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => server.resetHandlers())

    // Disable API mocking after the tests are done.
    afterAll(() => server.close())

    const setup = () => {
        render(<PlaylistsTDD />)
    }

    // RED -> Green -> Refactor -> RED ...
    test('loads and shows a list playlists', async () => {
        // Arrange - Given ... // no playlists

        // Act - When ... // loads playlists
        setup()
        const noItems = screen.queryAllByRole('listitem', {})
        expect(noItems).toHaveLength(0)

        // Assert - Then ... // Shows list of playlists
        const items = await screen.findAllByRole('listitem', {})

        expect(items).toHaveLength(2)
        expect(items[0]).toHaveTextContent('TestTitle 1')
        expect(items[1]).toHaveTextContent('TestTitle 2')
    })

    // test.todo('shows list of no playlists')

    test('selecting playlist from list loads details', async () => {
        fireEvent.click(screen.queryAllByRole('listitem')[0]);
        expect(screen.getByRole('heading')).toHaveTextContent('Details');
    })

    // test.todo('clicking edit in details show edit form')

    // test.todo('saving form changes updates list and details')


})
