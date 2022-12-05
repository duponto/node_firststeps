const REQUEST_TIMEOUT = 500;

function encrypt(data){
    return 'encrypt'
}
function send(url,data){
    const encryptedData = encrypt(data);
    console.log(`sendindo ${encryptedData} to ${url}`);
}

module.exports = {
    REQUEST_TIMEOUT,
    send,
}