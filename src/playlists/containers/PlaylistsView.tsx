// tsrafc
import React, { useEffect, useState } from 'react'
import { Playlist } from '../../model/Playlist'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistEditForm } from '../components/PlaylistEditForm'
import { NewPlaylistForm } from '../components/NewPlaylistForm'
import { PlaylistList } from '../components/PlaylistList'

interface Props { }

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

export const PlaylistsView = (props: Props) => {
    const [selectedId, setSelectedId] = useState<string | undefined>()
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>()
    const [mode, setMode] = useState<'details' | 'form' | 'default' | 'new'>('default')
    const [playlists, setPlaylists] = useState<Playlist[]>(data)

    /* TODO:

        - git checkout -b mojezadanie1
        - git add .
        - git commit -m "Moje zadanie"
        - git checkout master
        - git pull
        - git checkout -b mojezadanie2
        - szuru buru...
        - git add .
        - git commit -m "Moje zadanie 2"


        - Show "Please select playlist when nothing selected"
        - Remove playlists when X clicked
        - Create new playlist
            - Show Empty form when button [ Create new playlist ] cliked
            - Cancel... go back to details.
            - Save - add new playlist to list and select in in details.
    */

    const edit = () => {
        setMode('form')
    }
    const cancel = () => {
        setMode('details')
    }
    const returntodefault = () => {
        setMode('default')
    }
    const save = (draft: Playlist) => {
        setMode('details')
        setPlaylists(playlists.map(p => p.id === draft.id ? draft : p))
    }
    const create = () => {
        setMode('new')
        console.log('new')
    }
    const saveNew = (newdraft: Playlist) => {
        console.log(newdraft)
        playlists.push(newdraft)
        setPlaylists(playlists)
        setMode('default')
    }

    //przekazujemy caly obiekt, lepiej przekazywac samo id, popraw w wolnej chwili 
    const remove = (playlistToRemove: Playlist) => {
        setPlaylists(playlists.filter(p => p.id !== playlistToRemove.id))
    }

    useEffect(() => {
        selectedId ? setMode('details') : setMode('default')

        setSelectedPlaylist(playlists.find(p => p.id == selectedId))

    }, [selectedId, playlists])

    return (
        <div>
            <h4>PlaylistsView</h4>
            {/* .row>.col*2 */}
            <div className="row">
                <div className="col">
                    <PlaylistList
                        // { /*jesli id nie jest selected to ustaw id na selectedid, else ustaw selectedid na undefined */}
                        onSelected={!selectedId ? (id) => setSelectedId(id) : (id) => setSelectedId(undefined)}
                        playlists={playlists}
                        selectedId={selectedId}
                        remove={remove} />

                    <button className="btn btn-info btn-block mt-4" onClick={create}>Create New Playlist</button>
                </div>
                <div className="col">
                    {selectedPlaylist && mode === 'details' && <PlaylistDetails
                        edit={edit}
                        playlist={selectedPlaylist} />}
                    {selectedPlaylist && mode === 'form' && <PlaylistEditForm
                        save={save}
                        playlist={selectedPlaylist}
                        cancel={cancel} />}
                    {/* !selectedId do sprobowania zamiast mode === default*/}

                    {mode === 'default' && <div className="alert alert-info">Please select playlist</div>}

                    {mode === 'new' && <NewPlaylistForm
                        returntodefault={returntodefault}
                        savenew={saveNew} />}

                </div>
            </div>
        </div>
    )
}
