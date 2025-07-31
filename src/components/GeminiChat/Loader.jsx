import { SpinnerCircular } from "spinners-react";

export default function Loader() {
  return (
    <SpinnerCircular
      size={30}
      thickness={150}
      speed={180}
      color="rgba(78, 159, 255, 1)"
      secondaryColor="rgba(0,0,0,0)"
    />
  );
}
