import React, { useEffect, useState } from 'react'
import { fetchPlaylists } from '../../core/hooks/usePlaylists'
import { Playlist } from '../../model/Playlist'
import { PlaylistDetailsTDD } from '../components/PlaylistDetailsTDD'
import { PlaylistListTDD } from '../components/PlaylistListTDD'

interface Props {

}

const firstPlaylist = [{}, {}, {}]

export const PlaylistsTDD = (props: Props) => {
    const [mode, setMode] = useState('default')
    const [playlists, setPlaylists] = useState(firstPlaylist)


    const changeModetoDetails = () => {
        setMode('details')
    }

    useEffect(() => {
        fetchPlaylists().then(res => {
            setPlaylists(res)
        })

    }, []
    )

    return (
        <div>

            <PlaylistListTDD playlists={playlists}
            />

            {mode === 'details' && <PlaylistDetailsTDD />}

        </div>
    )
}
