import React, { useState } from 'react'

interface Props {
    returntodefault: React.MouseEventHandler<HTMLButtonElement>;
}

export const NewPlaylistForm = ({ returntodefault }: Props) => {

    const [message, setMessage] = useState('')
    const [acceptNew, setAcceptNew] = useState(false)

    const [playlistId, setPlaylistId] = useState('')
    const [name, setName] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const [description, setDescription] = useState('')

    return (
        <div>
            <h3>NewPlaylistForm</h3>

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

            <button className="btn btn-danger" onClick={returntodefault}>Cancel</button>
            <button className="btn btn-success">Save</button>
        </div>
    )
}

