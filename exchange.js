const request = require('request');

const options = {
    url: 'https://auth.truelayer.com/connect/token',
    headers: {
        'grant_type': 'authorization_code',
        'client_id': 'testapp - niad',
        'client_secret': 'e1s9eoh4l2gtjbvxjv9kf',
        'redirect_uri': 'https://console.truelayer.com/redirect-page',
        'code': 'b6f8da225b1683478d45146be266c3d22101c17e6beb06d1971c674bc20934e8'
    }
}
// request({
//     method: 'POST',
//     uri: 'https://auth.truelayer.com/connect/token',
//     headers: {
//         'grant_type': '',
//         'client_id': 'testapp - niad',
//         'client_secret': 'e1s9eoh4l2gtjbvxjv9kf',
//         'redirect_uri': 'https://console.truelayer.com/redirect-page',
//         'code': 'b6f8da225b1683478d45146be266c3d22101c17e6beb06d1971c674bc20934e8'
//     },
     callback => (error, response, body) {
        if (error) {
            return console.error('post request failed:', error);
        }
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log('response body in progress...');
            console.log(info);
        }
    }
// })

const headers: {
    'grant_type': 'authorization_code',
    'client_id': 'testapp - niad',
    'client_secret': 'e1s9eoh4l2gtjbvxjv9kf',
    'redirect_uri': 'https://console.truelayer.com/redirect-page',
    'code': 'b6f8da225b1683478d45146be266c3d22101c17e6beb06d1971c674bc20934e8'
}

 async function data() {
    const options {
        method: 'POST',
        uri: 'https://auth.truelayer.com/connect/token',
        headers,
        body
    }
 }
request(options, callback);