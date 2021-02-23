import axios from "axios";
const instance=axios.create({

    baseURL:' https://us-central1-clone-6d54c.cloudfunctions.net/api'// api (cloud function url)
});
export default instance;
//http://localhost:5001/clone-6d54c/us-central1/api'