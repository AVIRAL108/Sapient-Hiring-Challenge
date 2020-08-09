import Axios from "axios";

let ApiConfig = Axios.create({
  baseURL: "https://api.spaceXdata.com/",
  validateStatus: function (status) {
    return status >= 200 && status < 550; // default
  },
});

export {  ApiConfig } ;