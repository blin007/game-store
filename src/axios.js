import axios from "axios"

const instance= axios.create({
    baseURL: 'https://us-central1-game-store-589e9.cloudfunctions.net/api' //local api endpoint
    //Local api endpoint: for testing: http://localhost:5001/game-store-589e9/us-central1/api
});

export default instance;