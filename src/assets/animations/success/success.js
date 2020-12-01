// import Lottie library
import { useLottie } from "lottie-react";

// import animation json
import success from "./success.json";

const Success = () => {
  const style = {
    width: "55%",
    margin: "0 auto",
  };
  
  const options = {
    animationData: success,
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default Success;
