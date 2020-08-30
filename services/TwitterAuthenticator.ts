import axios, { AxiosRequestConfig } from 'axios'

const trendPlaces: AxiosRequestConfig = {
    method: 'post',
    url: 'https://api.twitter.com/1.1/trends/place.json',
    headers: {
        Authorization:
            'OAuth oauth_consumer_key="dYiQ9FqI2Xxa9DIWQwrce1VxZ",oauth_token="581278002-Dh6CGNHvOgmHbnbv7IZgcyGG03qGcZRAWDdSNx71",oauth_signature_method="HMAC-SHA256",oauth_timestamp="1598820803",oauth_nonce="QQbtT95xBa7",oauth_version="1.0",oauth_signature="iOeWlVZwpWgc5U7ES11LE9%2BcQRMpEFXkuC0i6BvH5rI%3D"',
        Cookie:
            'personalization_id="v1_IYO+tbBobLVHro2nCmYnJw=="; guest_id=v1%3A159330059161152026',
    },
}

export const testing = () => {
    axios.get('http://webcode.me').then((resp) => {
        console.log(resp.data)
    })
}

export const GetTrendPlaces = () => {
    axios(trendPlaces)
        .then((response) => {
            return JSON.stringify(response.data)
        })
        .catch((error) => {
            console.log('The error is: ' + error)
        })
}
