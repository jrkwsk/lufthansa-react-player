import React from 'react'
import { ArtistView } from '../../model/Search'


interface Props {
    artist: ArtistView
}

export const ArtistCard = ({ artist }: Props) => {
    return (
        <div className="card h-100">
            <img src="https://www.catsbest.de/wp-content/uploads//katzenbaby-von-der-mutter-trennen-4-1024x684.jpg" className="card-img-top" alt={artist.name} />

            <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
            </div>
        </div>
    )
}
