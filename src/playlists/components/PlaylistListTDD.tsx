import React, { useState } from 'react'
import { Playlist } from '../../model/Playlist'

interface Props {
    playlists: Playlist[]
    selectedId?: string
    onSelected(id: string): void
    onRemove(id: Playlist['id']): void
}

export const PlaylistListTDD = React.memo(({
    playlists, selectedId, onSelected, onRemove
}: Props) => {

    return (
        <div>
            <div className="list-group" role="list">
                {playlists.map((playlist, index) =>
                    <div className={`list-group-item ${selectedId === playlist.id ? 'active' : ''}`}
                        data-playlist-id={playlist.id}
                        onClick={() => { onSelected(playlist.id) }}
                        role="listitem"
                        key={playlist.id}>

                        <span>{playlist.name}</span>

                        <button className="btn btn-light close" onClick={(event) => {
                            event.stopPropagation()
                            onRemove(playlist.id)
                        }}>&times;</button>
                    </div>
                )}
            </div>
        </div>
    )
})