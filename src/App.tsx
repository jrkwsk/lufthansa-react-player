import React, { useState } from 'react';
import { PlaylistsView } from './playlists/containers/PlaylistsView';
// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import { MusicSearchView } from './music-search/containers/MusicSearchView';

function App() {

  const [mode, setMode] = useState('showPlaylists')

  const tabs = [
    { tabText: 'Show my playlists', mode: 'showPlaylists' },
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
              onClick={() => setMode(tab.mode)}>
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
            {mode === 'artists' && <MusicSearchView />}

          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
