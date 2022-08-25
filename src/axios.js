import axios from "axios"

const instance= axios.create({
    baseURL: 'http://localhost:5001/game-store-589e9/us-central1/api' //local api endpoint
});

export default instance;