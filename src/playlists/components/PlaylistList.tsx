import { version } from 'node:punycode'
import React, { useState } from 'react'
import { Playlist } from '../../model/Playlist'

interface Props {
    playlists: Playlist[]
    selectedId?: string
    onSelected(id: string): void
    remove(playlist: Playlist): any
}

export const PlaylistList = ({ playlists, selectedId, onSelected, remove }: Props) => {

    return (
        <div>
            <div className="list-group">
                {playlists.map((playlist, index) =>
                    <div className={`list-group-item ${selectedId === playlist.id ? 'active' : ''}`}
                        onClick={() => onSelected(playlist.id)}
                        key={playlist.id}>
                        {playlist.name}

                        <span className="close" onClick={(event) => { event.stopPropagation(); remove(playlist) }}>&times;</span>

                    </div>
                )}
            </div>
        </div>
    )
}
