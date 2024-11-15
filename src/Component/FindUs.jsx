import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FIndUs = () => {
  return (
    <div className="pt-12">
      <h1 className="font-semibold pb-4">Find us on</h1>
      <div>
        <div className="join flex *:w-full *:bg-base-100 join-vertical">
          <button className="btn join-item justify-start"><FaFacebook></FaFacebook> FaceBook</button>
          <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
          <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default FIndUs;
