const React = require('react');
const sendToServer = require('sendToServer');

var PhotoUploader = React.createClass({

  getInitialState: function() {
    return {
      image: "",
      imagePreviewUrl: ""
    };
  },

  onImageChange: function (e) {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  },

  onFormSubmit: function(e) {
    e.preventDefault();
    var image = document.getElementById("input").files[0];
    var that = this;
    var id = this.props.id;
    sendToServer.postData(image).then(function (response) {
      if (typeof response.error != undefined && response.error != null) {
        console.error("error: " + response.error);
      } else {
        window.alert("Image upload succesful");
      }
    });
  },

  render: function() {
    var {imagePreviewUrl} = this.state;
    var imageTag = () => {
      if (imagePreviewUrl == "") {
        return null;
      } else {
        return (<img src={imagePreviewUrl}/>);
      }
    };

    return (
      <div className="submit-form">
        <form onSubmit={this.onFormSubmit}>
          <label className="button-primary">Select Image
            <input className="hddenInput" id="input" ref="image" type="file" required onChange={this.onImageChange}/>
          </label>
          <div className="preview">
            {imageTag()}
          </div>
          <button className="button-primary">Upload</button>
        </form>
      </div>
    );
  }

});

module.exports = PhotoUploader;
