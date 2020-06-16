/* eslint-disable no-unused-vars */

import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
    return get('users');
}

export function deleteUser(id){
    return deleteUser(`users/${id}`);
}

function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}

// cant call the function delete since it is a RESERVED word
function del(url){
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onerror);
}

function onSuccess(response){
    return response.json();
}
function onError (error){
    console.log(error); // eslint-disable-line no-console
}

/*
   get, onSuccess and onError are abstracted from the only exported function
   thus they are private functions

*/