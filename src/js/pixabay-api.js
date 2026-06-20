import axios from "axios";

const API_KEY = "55235780-cc5bf4fbb6f37173e9416e03e";

export function getImagesByQuery(query) {
return axios.get("https://pixabay.com/api/", {
    params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    }
}).then(response => {
    return response.data;
});
}