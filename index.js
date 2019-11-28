const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const secrets = require('./secrets')
const args = process.argv
if (args.length < 3) {
    throw "You must provide an emaail address"
}
const emailAddress = args[2]

getUser(authorize(secrets))

function authorize(credentials) {
    const { client_secret, client_id, redirect_uris } = credentials.client;
    const oauth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );
    oauth2Client.credentials = credentials.token
    return oauth2Client
}
function getUser(auth) {
    const service = google.admin({ version: 'directory_v1', auth });
    service.users.get({
        userKey: emailAddress,
    }, (err, res) => {
        console.log(
            res.data.name.givenName,
            res.data.primaryEmail,
            res.data.organizations[0].title
        )
    })
}