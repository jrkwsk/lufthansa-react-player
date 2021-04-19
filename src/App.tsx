import React, { useState } from 'react';
import { PlaylistsView } from './playlists/containers/PlaylistsView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';
// import { AlbumSearchView } from './music-search/containers/AlbumSearchView';
// import { ArtistSearchView } from './music-search/containers/ArtistSearchView';

// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  const [mode, setMode] = useState('showPlaylists')
  // const [isActiveTab, setIsActiveTab] = useState(false)
  const [selectedTab, setSelectedTab] = useState('0')

  const tabs = [
    { tabText: 'Show playlists', mode: 'showPlaylists' },
    { tabText: 'Search for artists', mode: 'searchForArtists' },
    { tabText: 'Search for albums', mode: 'searchForAlbums' }
  ]

  //   useEffect(() => {

  //     { mode === 'showPlaylists' && }
  //     { mode === 'searchForMusic' && }
  //     { mode === 'searchForAlbums' && }
  //     { mode === 'searchForArtists' && }

  //     )
  // }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">

            <h1>MusicApp</h1>
            <ul className="nav nav-tabs nav-pills nav-fill">
              {tabs.map(tab =>
                <li className="nav-item">
                  <a
                    className={mode === tab.mode ? "nav-link btn btn-info active" : "nav-link btn"}
                    key={tab.mode}
                    onClick={() => setMode(tab.mode)}
                  >
                    {tab.tabText}</a>
                </li>
              )}
            </ul>
            {/* .container>.row>.col */}


            {mode === 'showPlaylists' && <PlaylistsView />}
            {mode === 'searchForAlbums' && <MusicSearchView searchType={mode} />}
            {mode === 'searchForArtists' && <MusicSearchView searchType={mode} />}



          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
