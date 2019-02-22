import axios from 'axios';

const KEY = 'AIzaSyCS1AIsXTKgpESXNfWz2mgF7IxQsR5Q8Cg';

export default axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  params: {
    key: KEY
  }
});
