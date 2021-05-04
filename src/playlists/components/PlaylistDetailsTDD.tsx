import React, { useEffect, useState } from 'react'
import { fetchPlaylists } from '../../core/hooks/usePlaylists'
import { Playlist } from '../../model/Playlist'
import styles from './PlaylistDetails.module.css'

interface Props {
    // playlist: Playlist;
    edit: () => void
}


export const PlaylistDetailsTDD: React.FC<Props> = ({
    // playlist,
    edit
}) => {

    const [playlist, setPlaylist] = useState({
        id: 'string',
        name: 'string',
        public: true,
        description: 'string'
    })

    useEffect(() => {
        fetchPlaylists().then(res => {
            setPlaylist(res)
        })

    }, []
    )

    return (
        <div>
            <dl data-playlist-id={playlist.id}>
                <dt>Name:</dt>

                <dd aria-label="Playlist Name"
                    data-testid="playlist_name">{playlist.name}</dd>

                <dt>Public:</dt>
                <dd data-testid="playlist_ispublic" className={playlist.public ? styles.playlistPublic : styles.playlistPrivate}>
                    {playlist.public ? 'Yes' : 'No'}
                </dd>

                <dt>Description:</dt>
                <dd data-testid="playlist_description">{playlist.description}</dd>
            </dl>

            <button className="btn btn-danger" onClick={edit}>Edit</button>
        </div>
    )
}/* , (prevProps, nextProps) => prevProps.playlist === nextProps.playlist */