import React, { useState } from 'react';
import { PlaylistsView } from './playlists/containers/PlaylistsView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';
import { AlbumSearchView } from './music-search/containers/AlbumSearchView';
import { ArtistSearchView } from './music-search/containers/ArtistSearchView';

// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  const [mode, setMode] = useState('showPlaylists')

  const tabs = [
    { tabText: 'Show playlists', mode: 'showPlaylists' },
    { tabText: 'Search for music - general', mode: 'searchForMusic' },
    { tabText: 'Search for artists', mode: 'searchForArtists' },
    { tabText: 'Search for albums', mode: 'searchForAlbums' }
  ]

  return (
    <div>
      <ul className="nav nav-tabs nav-fill">
        {tabs.map(tab =>
          <li className="nav-item">
            <a
              className="nav-link btn"
              key={tab.mode}
              onClick={() => setMode(tab.mode)
              }>
              {tab.tabText}</a>
          </li>
        )}
      </ul>
      {/* .container>.row>.col */}
      <div className="container">
        <div className="row">
          <div className="col">

            <h1>MusicApp</h1>

            {mode === 'showPlaylists' && <PlaylistsView />}
            {mode === 'searchForMusic' && <MusicSearchView />}
            {mode === 'searchForAlbums' && <AlbumSearchView />}
            {mode === 'searchForArtists' && <ArtistSearchView />}


          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
