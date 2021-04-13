import React, { ChangeEvent, useEffect, useState } from 'react'
import { Playlist } from '../../model/Playlist'
import { PlaylistsView } from '../containers/PlaylistsView'

interface Props {
    playlist: Playlist;
    togglemode: any
    onSave: any
}


export const PlaylistEditForm = ({ playlist, togglemode, onSave }: Props) => {
    const [message, setMessage] = useState('')
    const [acceptNew, setAcceptNew] = useState(false)

    const [playlistId, setPlaylistId] = useState(playlist.id)
    const [name, setName] = useState(playlist.name)
    const [isPublic, setIsPublic] = useState(playlist.public)
    const [description, setDescription] = useState(playlist.description)

    useEffect(() => {
        if (playlistId !== playlist.id) {
            if (acceptNew) {
                setName(playlist.name)
                setPlaylistId(playlist.id)
                setIsPublic(playlist.public)
                setDescription(playlist.description)
                setAcceptNew(false)
                setMessage('')


            } else {
                setMessage('Unsaved Changes')
            }
        }
    }, [playlist, acceptNew, playlistId])

    const saveNewData = () => {
        const updatedInfo =
        {
            id: playlistId,
            name: name,
            public: isPublic,
            description: description
        }
        onSave(updatedInfo)
    }


    return (
        <div>
            <h3>PlaylistEditForm</h3>

            {message && <div className="alert alert-danger">{message} <button onClick={() => setAcceptNew(true)}>OK</button></div>}

            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" value={name}
                    onChange={event => setName(event.target.value)} />
                <p>{name.length} / 170</p>
            </div>

            <div className="form-check">
                <label><input type="checkbox" className="form-check-input" checked={isPublic}
                    onChange={event => setIsPublic(event.target.checked)} /> Public </label>
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
            </div>

            <button className="btn btn-danger" onClick={togglemode}>Cancel</button>
            <button className="btn btn-success" onClick={saveNewData}>Save</button>
        </div >
    )
}





// const NameField = () => {
//     const [name, setName] = useState(playlist.name)
//     return <div className="form-group" >
//         <label>Name:</label>
//         <input type="text" className="form-control" value={name} onChange={event => { setName(event.target.value) }} />
//         <p>{name.length} / 170</p>
//     </div>
// }
