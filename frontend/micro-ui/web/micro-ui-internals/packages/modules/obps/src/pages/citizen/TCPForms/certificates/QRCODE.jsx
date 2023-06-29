import { useState, useRef } from "react";
// import { QRCodeCanvas } from "qrcode.react";

const QrCode = () => {
  const [value, setValue] = useState("");

  const qrRef = useRef();

//   const downloadQRCode = (e) => {
//     e.preventDefault();
//     let canvas = qrRef.current.querySelector("canvas");
//     let image = canvas.toDataURL("image/png");
//     let anchor = document.createElement("a");
//     anchor.href = image;
//     anchor.download = `qr-code.png`;
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor);
//     setUrl("");
//   };

  const qrCodeEncoder = (e) => {
    setValue(e.target.value);
  };

  // const qrcode = (
  //   <QRCodeCanvas
  //     id="qrCode"
  //     value="8"
  //     size={100}
  //     bgColor={"#ffffff"}
  //     level={"H"}
  //   />
  // );

  return (
    <div className="qrcode__container">
      {/* <div ref={qrRef}>{qrcode}</div> */}
      
    </div>
  );
};

export default QrCode;