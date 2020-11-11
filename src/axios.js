import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-e9374.cloudfunctions.net/api'
    // "http://localhost:5001/clone-e9374/us-central1/api",
});

export default instance;