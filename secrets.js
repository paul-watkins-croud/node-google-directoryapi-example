require('dotenv').config()

module.exports = {
    client: {
        "client_id": process.env.GOOGLE_DIRECTORY_CLIENT_ID,
        "project_id":process.env.GOOGLE_DIRECTORY_PROJECT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":process.env.GOOGLE_DIRECTORY_CLIENT_SECRET,
        "redirect_uris": [
            "https://developers.google.com/oauthplayground"
        ],
        "javascript_origins": [
            "http://localhost:3000"
        ]
    },
    token: {
        "scope": "https://www.googleapis.com/auth/admin.directory.user.readonly",
        "token_type": "Bearer",
        "expiry_date": 1574956199914,
        "refresh_token": process.env.GOOGLE_DIRECTORY_REFRESH_TOKEN
    }
}