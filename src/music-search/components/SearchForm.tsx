import React, { useState } from 'react'

interface Props {
    onSearch(query: string): void
    searchFormVariant: string
}

export const SearchForm = ({ onSearch, searchFormVariant }: Props) => {
    const [query, setQuery] = useState('')

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder={searchFormVariant}
                    onChange={e => setQuery(e.target.value)}
                    onKeyUp={e => e.code === 'Enter' && onSearch(query)}
                />

                <button className="btn btn-outline-secondary" type="button" onClick={() => onSearch(query)}>Search</button>
            </div>
        </div>
    )
}
