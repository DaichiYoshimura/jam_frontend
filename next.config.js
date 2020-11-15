const withOffline = require('next-offline');
module.exports = withOffline({
    env: {
        MODE: 'DEV',
        HOST_SERVERSIDE: 'localhost:8000'
    }
});