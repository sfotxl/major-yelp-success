import { useEffect, useState} from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'berlin'
                }
            });
            // response.data will be JSON data returned from API call
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong.');
        }

    };

    useEffect(() => {
        searchApi('Connection');
    }, []);

    return [searchApi, results, errorMessage];
};