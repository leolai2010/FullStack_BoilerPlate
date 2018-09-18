import axios from 'axios';

export const FETCH_CERAMICS = 'fetch_ceramics';
export const CREATE_CERAMICS  = 'create_ceramics';

export function fetchCeramics(){
    const request = axios.get('/');
    return {
        type: FETCH_CERAMICS,
        payload: request
    };
}

export function createCeramics(values, callback){
    const request = axios.get('/', values)
        .then(()=> callback());
    return {
        type: CREATE_CERAMICS,
        payload: request
    };
}