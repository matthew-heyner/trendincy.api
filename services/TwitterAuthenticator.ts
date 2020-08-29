import axios, { AxiosRequestConfig } from 'axios'

const trendPlaces: AxiosRequestConfig = {
    method: 'post',
    url: 'https://api.twitter.com/1.1/trends/place.json',
    headers: {
        Authorization:
            'OAuth oauth_consumer_key="AhILi0Y7BWNodujUVS6hWLYAB",oauth_token="581278002-zivYuX1ssiL9Kp3ODx0hAMJKN0NRbrWkyp9rKaQF",oauth_signature_method="HMAC-SHA256",oauth_timestamp="1598732119",oauth_nonce="WAS2wgAtin8",oauth_version="1.0",oauth_signature="%2BBANWvn4ul2ADIte7RJPjZ0v2lwJbGR4OQ%2F5ekYy2E0%3D"',
        Cookie:
            'personalization_id="v1_IYO+tbBobLVHro2nCmYnJw=="; guest_id=v1%3A159330059161152026',
    },
}

export const GetTrendPlaces = () => {
    axios(trendPlaces)
        .then(function (response) {
            return JSON.stringify(response.data)
        })
        .catch(function (error) {
            throw new Error(error)
        })
}
