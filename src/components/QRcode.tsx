import SearchBar from "./SearchBar";

var React = require('react');
var QRCode = require('qrcode.react');

React.render(
  <QRCode value="https://facebook.github.io/react/" />,
    SearchBar
);


export{}