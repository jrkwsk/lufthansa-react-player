import React from 'react'
import { ArtistView } from '../../model/Search'
import { ArtistCard } from './ArtistCard'

interface Props {
    artists: ArtistView[]
}

export const ArtistGrid = ({ artists }: Props) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4 no-gutters">
                {artists.map(artist => <div className="col mb-4" key={artist.id}>
                    <ArtistCard artist={artist} />
                </div>)}
            </div>
        </div>
    )
}
