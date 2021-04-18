import React from 'react'
import { AlbumView } from '../../model/Search'
import { AlbumCard } from './AlbumCard'

interface Props {
    albums: AlbumView[]
}

export const AlbumGrid = (albumsMock: Props) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4 no-gutters">
                <div className="col mb-4">
                    {albumsMock.map((albumsMock, index) =>

                        <AlbumCard
                            titleForAlbum={albumsMock.title}
                            imageForAlbum={albumsMock.image}
                            key={albumsMock.id}
                        />

                    )}











                </div>

            </div>
        </div>
    )
}
