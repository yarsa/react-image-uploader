/**
 * loading react components
 */
const React = require("react");
const ReactDom = require("react-dom");

/**
 * loading our custom components
 */
const PhotoUploader = require('PhotoUploader');

ReactDom.render(
  <PhotoUploader/>,
  document.getElementById("app")
);
