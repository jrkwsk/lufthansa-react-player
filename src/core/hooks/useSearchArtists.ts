import axios from 'axios';
import { useState } from 'react';
import { ArtistsSearchResponse, ArtistView } from '../../model/Search';
import { auth } from '../services';


export const useSearchArtists = (api_url: string) => {
    const [resultsForArtists, setResultsForArtists] = useState<ArtistView[]>([]);
    const [isLoadingForArtists, setIsLoadingForArtists] = useState(false);
    const [messageForArtists, setMessageForArtists] = useState('');

    const searchArtists = async (query: string) => {
        try {
            setResultsForArtists([]);
            setMessageForArtists('');
            setIsLoadingForArtists(true);

            const response = await axios.get<ArtistsSearchResponse>(api_url, {
                headers: { Authorization: 'Bearer ' + auth.token },
                params: { q: query, type: 'artist' },
            });

            setResultsForArtists(response.data.artists.items);
        }
        catch (error) { setMessageForArtists(error.message); }
        finally { setIsLoadingForArtists(false); }
    };

    return {
        searchArtists,
        isLoadingForArtists,
        messageForArtists,
        resultsForArtists
    };
};
