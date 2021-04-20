import React from 'react'
import { AlbumView, Album } from '../../model/Search'

interface Props {
    albums: AlbumView
}

export const AlbumCard = ({ albums }: Props) => {
    return (
        <div className="card h-30 text-center">
            <img src={albums.images[0]?.url} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{albums.name}</h5>
            </div>
        </div>
    )
}
