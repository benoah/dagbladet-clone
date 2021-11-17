import {
    useCallback,
    useState
} from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const request = useCallback(
        async (url, method = 'GET', body = null, headers = {}) => {
                setLoading(true);

                try {
                    headers['Content-Type'] = 'application/json;charset=utf-8';
                    headers.Accept = 'application/json';

                    if (method !== 'GET') {
                        body = JSON.stringify(body);
                    }
                    const response = await fetch(url, {
                        method,
                        headers,
                        body
                    });
                    const parsedResponse = await response.json();

                    if (response.status === 401) {
                        return false;
                    }

                    if (!response.ok) setError(parsedResponse);

                    return parsedResponse;
                } catch (e) {
                    setError(e);

                    return '';
                } finally {
                    setLoading(false);
                }
            },
            []
    );

    const clearError = useCallback(() => setError(null), []);

    return {
        loading,
        request,
        error,
        clearError
    };
};

export default useHttp;