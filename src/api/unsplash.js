import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 3e0b992bbe92e9896255cd0f411be0a872045b52a5171a078515b4abd76c55cf'
  }
});
