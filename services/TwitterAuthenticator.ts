import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    method: 'post',
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'OAuth oauth_consumer_key="AhILi0Y7BWNodujUVS6hWLYAB",oauth_token="581278002-bvqliK63SbBGfkK8oRPFQojmEG8QTfojiEj793MM",oauth_signature_method="HMAC-SHA256",oauth_timestamp="1594252167",oauth_nonce="GhxzmqrMnct",oauth_version="1.0",oauth_signature="RN3T0Wy5OOtcLIh9Vw5jJJ22hwoYCPWMdVWXws3zerY%3D"',
        'Cookie': 'personalization_id="v1_IYO+tbBobLVHro2nCmYnJw=="; guest_id=v1%3A159330059161152026'
    }
};

export const TwitterApi = () => {
    axios(config)
        .then(function (response) {
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            throw new Error(error);
        });
}
