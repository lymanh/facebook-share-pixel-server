import axios from 'axios'

export const fbRequest = axios.create({ baseURL: `https://graph.facebook.com` })
