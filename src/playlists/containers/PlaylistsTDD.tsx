import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Playlist } from '../../model/Playlist'
import { SearchForm } from '../../core/components/SearchForm'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistEditForm } from '../components/PlaylistEditForm'
import { PlaylistList } from '../components/PlaylistList'

interface Props {

}
const data: Playlist[] = [
    {
        id: '123',
        name: 'Playlista 😇',
        public: true,
        description: 'no i co ja dzis polubie?..🤔'
    },
    {
        id: '234',
        name: 'Playlista 😁',
        public: false,
        description: 'moze polubię TypeScript?. 🚀'
    },
    {
        id: '345',
        name: 'Playlista 😆',
        public: true,
        description: 'albo wszystko polubię co mi tam 😅💖'
    },
]

export const PlaylistsTDD = (props: Props) => {
    const [filter, setFilter] = useState('')
    const [playlists, setPlaylists] = useState<Playlist[]>(data)
    const [selectedId, setSelectedId] = useState<string | undefined>()
    const [mode, setMode] = useState<'details' | 'form' | 'create'>('details')
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>()


    useEffect(() => {
        setSelectedPlaylist(playlists.find(p => p.id == selectedId))
    }, [selectedId, playlists])

    const edit = useCallback(() => setMode('form'), [])

    const cancel = useCallback(() => setMode('details'), [])

    const saveChangedPlaylist = useCallback((draft: Playlist) => {
        if (draft.name.length < 3) {
            return [new Error('Too short!')]
        }
        setMode('details')
        setPlaylists(playlists => playlists.map(p => p.id === draft.id ? draft : p))
        return null;
    }, [])

    const removePlaylist = useCallback((id: Playlist['id']) => {
        setPlaylists(playlists.filter(p => p.id !== id))
    }, [playlists])

    const changeSelectedPlaylist = useCallback((id: Playlist['id']): void => {
        setSelectedId(selectedId => selectedId === id ? undefined : id)
    }, [])

    return (
        <div>
            {/* <h1>Music app</h1> */}
            <SearchForm onSearch={setFilter} />
            <PlaylistList
                playlists={playlists}
                onSelected={changeSelectedPlaylist}
                onRemove={removePlaylist}
            />
            {selectedPlaylist && mode === 'details' && <PlaylistDetails
                edit={edit}
                playlist={selectedPlaylist} />}

            {selectedPlaylist && mode === 'form' && <PlaylistEditForm
                playlist={selectedPlaylist}
                save={saveChangedPlaylist}
                cancel={cancel}
            />}
        </div>
    )
}
