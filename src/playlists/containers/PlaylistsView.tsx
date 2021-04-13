// tsrafc
import React, { useEffect, useState } from 'react'
import { ImportsNotUsedAsValues } from 'typescript'
import { Playlist } from '../../model/Playlist'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistEditForm } from '../components/PlaylistEditForm'
import { PlaylistList } from '../components/PlaylistList'

interface Props { }

const playlist = {
    id: '123',
    name: 'Placki',
    public: true,
    description: 'Lubie placki'
}

const playlistsData: Playlist[] = [
    {
        id: '123',
        name: 'Playlista 123',
        public: true,
        description: 'Lubie nalesniki'
    },
    {
        id: '234',
        name: 'Playlista 234',
        public: false,
        description: 'Lubie kotlety'
    },
    {
        id: '345',
        name: 'Playlista 345',
        public: true,
        description: 'Lubie pulpety'
    },

]

export const PlaylistsView = (onSave: Props) => {
    const [forceUpdate, setForceUpdate] = useState(Date.now())
    const [selectedId, setSelectedId] = useState<string | undefined>('234')
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>()
    // ja:
    // zmienna, metoda nadajaca wartosc, stan poczatkowy, a typescript mowi ze ma byc albo details albo form 
    const [mode, setMode] = useState<'details' | 'form'>('details')
    const [playlists, setPlaylists] = useState(playlistsData)


    //ja
    // const switchToForm = () => {
    //     setMode('form');
    //     console.log('switchToForm')
    // }

    // const switchToDetails = () => {
    //     setMode('details');
    //     console.log('switchtodetails')
    // }

    const toggleMode = () => {
        mode === 'details' ? setMode('form') : setMode('details');
    }


    /* TODO:
        - Przycisk Edit w Details "przełącza" na formularza (*zmiana mode! props!)
        - Przycisk Cancel w Formularzu "przełącza" na details (*zmiana mode! props!)
        - Przycisk Save w Formularzu:
            - "przełącza" na details (*zmiana mode! props!)
            - przekazuje Draft (szkic / nizapisane dane playlisty *props!) do PlaylistsView
            - PlaylistsView podmienia szkic na liście playlist (! Immutable - kopia renderuje!)

        - Zapisana playlista jest widoczna na liscie i w details!
    */

    const edit = () => {/*  */ }
    const cancel = () => {/*  */ }
    // const save = (draft: Playlist) => {
    /* update playlistS!   */
    // const index = playlists.findIndex(p => p.id === draft.id)
    // if (index !== -1) {
    //     playlists[index] = draft /// WRONG!! Mutable Code!
    // }

    // }

    const savePlaylist = (updatedPlaylistData: Playlist) => {
        //object object
        console.log('updatedPlaylistData in Parent: ', updatedPlaylistData)
        setSelectedPlaylist(updatedPlaylistData)

        setPlaylists(
            playlists.map(p =>
                p.id == updatedPlaylistData.id ? updatedPlaylistData : p
            ))

        toggleMode()
    }


    useEffect(() => {
        setSelectedPlaylist(playlists.find(p => p.id == selectedId))

    }, [selectedId, forceUpdate])



    return (
        <div>
            <h4>PlaylistsView</h4>

            {/* .row>.col*2 */}

            <div className="row">
                <div className="col">
                    <PlaylistList
                        onSelected={id => { setSelectedId(id) }}
                        playlists={playlists}
                        selectedId={selectedId} />


                    {/* <input type="text" value={zmienna}
                        onChange={event => setCostam(event.costam) }/> */}
                </div>
                <div className="col">

                    {selectedPlaylist && mode === 'details' && <PlaylistDetails
                        playlist={selectedPlaylist}
                        togglemode={toggleMode}
                    // newdata={newData}

                    />}
                    {selectedPlaylist && mode === 'form' && <PlaylistEditForm
                        playlist={selectedPlaylist}
                        togglemode={toggleMode}
                        onSave={savePlaylist}
                    />}

                </div>
            </div>
        </div>
    )
}
