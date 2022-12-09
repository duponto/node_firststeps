const {read} = require('./response');
const {send} = require('./request');
/*
const {read} = require('./response');
const {send} = require('./request');
import {send} from './internals/request.mjs';
import {read} from './internals/response.mjs';
*/

function makeRequest(url, data) {
    send(url,data)
    return read();
}

const responded = makeRequest('https://google.com', 'hello')

console.log(responded)