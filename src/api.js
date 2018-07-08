import { apiMethods } from './apiConstants';

const api = (url, method = apiMethods.get, body = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            body: method !== apiMethods.get && JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                if (result.ok === false) {
                    throw result;
                } else {
                    return result.json();
                }
            })
            .then(json => resolve(json))
            .catch(err => {
                throw err;
            });
    });
};
export default api;
