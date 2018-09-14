import axios from 'axios';

export const CREATE_CERAMICS  = 'create_ceramics';

export function createCeramics(values, callback){
    const request = axios.get("/", values)
        .then(()=> callback());
    return {
        type: CREATE_CERAMICS,
        payload: request
    };
}