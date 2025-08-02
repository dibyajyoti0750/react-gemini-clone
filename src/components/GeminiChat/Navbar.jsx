import { assets } from "../../assets/assets";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="topContainer">
      <div>
        <h1>Gemini</h1>
        <div className="model">
          <span>2.5 Pro</span> <img src={assets.down} alt="Down arrow" />
        </div>
      </div>

      <img
        className="profilePic"
        src={assets.user}
        alt="Your Account"
        title="Your Account"
      />
    </div>
  );
}
