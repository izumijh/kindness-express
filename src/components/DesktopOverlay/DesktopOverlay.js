import React from 'react';

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Lottie
import Lottie from "react-lottie-wrapper";

// import preview animation
import * as preview from "../../assets/animations/preview/preview.json";

// import other image assets
import frame from "../../assets/images/iphone-frame.png";
import qr from "../../assets/images/QR/TKE-QR.svg";

// import css modules
import classes from './DesktopOverlay.module.css';

// Put this overlay in the Layout.js File
const DesktopOverlay = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: JSON.parse(JSON.stringify(preview.default)),
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Row className={`${classes.bg} ${classes.fadeIn}`}>
            <Col xs={4} lg={2} className={classes.left}>
                <div className={classes.align}>
                    <img src={frame} alt="mobile phone frame" />
                    <Lottie options={options} width={"auto"} height={"auto"} />
                </div>
            </Col>

            <Col xs={6} lg={5} className={classes.right}>
                <div className={classes.rightAlign}>
                    <div>
                        <h1>Hello there!</h1>
                        <h3>Thanks for visiting the Kindness Express!</h3>
                    </div>

                    <div>
                        <p>Unfortunately, the Kindness Express is made to run on mobile screens only. </p>
                        <p>Please scan the QR code below, and visit us through a smartphone instead. </p>
                        <p>Trust us, we’ll be worth your time!</p>

                        <img src={qr} alt="QR code" />
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default DesktopOverlay;