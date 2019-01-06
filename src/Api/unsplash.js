import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3f9a2cacd0cb48e872e4d9e5bfa722c5a0e109bf79d968d308a258ef25061462'
  }
})