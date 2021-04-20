import React from 'react'
import { Album, AlbumView } from '../../model/Search'
import { AlbumCard } from './AlbumCard'

interface Props {
    albumsMock: AlbumView[] | Album[];
}

export const AlbumGrid = ({ albumsMock }: Props) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4 no-gutters">
                {albumsMock.map((albumsMock: any, index: number) =>

                    <AlbumCard
                        albums={albumsMock}
                        key={albumsMock.id}
                    />

                )}

            </div>
        </div>
    )
}
