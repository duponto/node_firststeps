import {send} from './request.mjs';
import {read} from './response.mjs';
//const {read} = require('./response');


function makeRequest(url, data) {
    send(url,data)
    return read();
}

const responded = makeRequest('https://google.com', 'hello')

console.log(responded)