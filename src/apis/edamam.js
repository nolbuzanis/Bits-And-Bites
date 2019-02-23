import axios from 'axios';

const KEY = '0752e81fa03298d827c73e19abb7ee62';
const ID = '5cbcf26e';

export default axios.create({
  baseURL: 'https://api.edamam.com',
  params: {
    app_id: ID,
    app_key: KEY
  }
});
