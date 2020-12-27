import React from "react";

// import Lottie
import Lottie from "react-lottie-wrapper";
import * as sendLetterData from "../../assets/animations/sending-letter/sending-letter.json";
import * as sendMessageData from "../../assets/animations/sending-message/sending-plane.json";

// import required components
import PopUpModal from "../../components/PopUpModal/PopUpModal";

const SendingModal = (props) => {
  // Determine which lottie animation to show
  const animationData = props.alt
    ? sendMessageData.default
    : sendLetterData.default;

  // lottie animation settings
  const options = {
    loop: false,
    autoplay: false,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <PopUpModal>
        <Lottie
          options={options}
          isStopped={props.isStopped}
          eventListeners={[
            {
              eventName: "complete",
              callback: props.afterAnimation,
            },
          ]}
        />
      </PopUpModal>
    </>
  );
};

export default SendingModal;
