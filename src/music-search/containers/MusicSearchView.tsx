import React, { useState } from 'react'
import { Album, AlbumView } from '../../model/Search'
import { AlbumGrid } from '../components/AlbumGrid'
import { SearchForm } from '../components/SearchForm'

interface Props { }

const albumsMock: AlbumView[] = [
    { id: "123", name: "Album 123", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/300/300" }] },
    { id: "234", name: "Album 234", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/400/400" }] },
    { id: "345", name: "Album 345", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/500/500" }] },
    { id: "456", name: "Album 456", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/600/600" }] },
]

export const MusicSearchView = (props: Props) => {
    const [results, setResults] = useState<AlbumView[]>([])

    const searchAlbums = (query: string) => {
        console.log('Search :', query)
        setResults(albumsMock)
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm onSearch={searchAlbums} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AlbumGrid albums={results} />
                </div>
            </div>
        </div>
    )
}
