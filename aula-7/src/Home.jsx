import { Link } from "react-router-dom";
import Header from "./Header";

function Home () {
  return (
    <div>
    <Header/>
    <h1>Home</h1>
    <Link to="/details/google-chrome">Chrome</Link>
    <Link to="/details/mozilla-firefox">Mozilla</Link>
    <Link to="/details/microsoft-edge">Edge</Link>
    </div>
  );
}

export default Home;
