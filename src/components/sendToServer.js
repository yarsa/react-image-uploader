const axios = require('axios');

const URL = "http://www.some-example-url.com/photo/submit";

module.exports = {
  postData: function(image) {

    var data = new FormData();
    data.append("image", image);

    var config = {
      headers: {
        "enctype": "multipart/form-data"
      }
    };

    return axios.post(URL, data, config).then(function (response) {
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return error.response.data;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });
  }

};
