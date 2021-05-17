import React from 'react';
var QRCode = require('qrcode.react');
// import QRCode from 'qrcode.react';
interface ContainerProps {
  url: string 
}

const QRComponent:  React.FC<ContainerProps> = ({url}) => {

  return (
    <QRCode value={url} />
  );
};

export default QRComponent;