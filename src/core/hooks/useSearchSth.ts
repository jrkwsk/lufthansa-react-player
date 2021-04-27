import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { auth } from '../services';


export const useSearchSth = () => {
    const [results, setResults] = useState([]);

    return {
        results
    };



};
