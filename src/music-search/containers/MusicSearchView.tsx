import React from 'react'
import { Album, AlbumView } from '../../model/Search'
import { AlbumGrid } from '../components/AlbumGrid'
import { SearchForm } from '../components/SearchForm'

interface Props { }

const albumsMock: AlbumView[] | Album[] = [
    { id: '123', name: 'Album 123', type: 'album', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/300/300' }] },
    { id: '234', name: 'Album 234', type: 'album', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/400/400' }] },
    { id: '345', name: 'Album 345', type: 'album', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/500/500' }] },
]
/* TODO:
    - Render mock data in albums grid
    - Album card - album name + first image
    - Clicking 'search' executes 'searchAlbums' with search query from input
*/

export const MusicSearchView = (props: Props) => {

    const searchAlbums = (query: string) => {
        console.log('Search :', query)
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AlbumGrid albumsMock={albumsMock} />
                </div>
            </div>
        </div>
    )
}
