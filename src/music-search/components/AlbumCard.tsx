import React from 'react'

interface Props {
    titleForAlbum: string,
    imageForAlbum: string
}

export const AlbumCard = (titleForAlbum, imageForAlbum: Props) => {
    return (
        <div className="card h-100">
            <img src={imageForAlbum} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{titleForAlbum}</h5>
            </div>
        </div>
    )
}
