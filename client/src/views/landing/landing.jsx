import Login from "../../components/login/login";

import "./landing.css";

function LandingPage({login}) {
  return (
    <div className="landing-container">
      <Login login={login} />
    </div>
  );
}

export default LandingPage;
