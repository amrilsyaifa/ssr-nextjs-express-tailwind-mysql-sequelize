import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default async function fetchAPI(url) {
    const res = await fetch(publicRuntimeConfig.APP_URL + ':' + publicRuntimeConfig.PORT + publicRuntimeConfig.API_URL + url);
    const json = await res.json();
    return json
}