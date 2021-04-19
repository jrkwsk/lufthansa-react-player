import React from 'react'
import { ArtistView } from '../../model/Search'


interface Props {
    artist: ArtistView
}

export const ArtistCard = ({ artist }: Props) => {
    return (
        <div className="card h-100">
            {/* <img src="https://www.catsbest.de/wp-content/uploads//katzenbaby-von-der-mutter-trennen-4-1024x684.jpg" className="card-img-top" alt={artist.name} /> */}
            <img src={artist.images[0] ? artist.images[0]?.url : "https://www.catsbest.de/wp-content/uploads//katzenbaby-von-der-mutter-trennen-4-1024x684.jpg"} className="card-img-top" alt={artist.name} />

            <div className="card-body">
                <p className="card-title text-center">{artist.name}</p>

            </div>
        </div>
    )
}
