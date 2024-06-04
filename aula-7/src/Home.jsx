import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import './index.css';
function Home () {
  return (

    <div>
      <Header/>
      <div className="card-container">
        <Card 
          title = "Chrome"
          description = " A browser called google"
          link = "link logo"
        />
        <Card
          title = "Mozilla"
          description = " A browser called firefox"
          link = "link logo"
        />
        <Card
          title = "Edge"
          description = " A browser called Edge"
          link = "link logo"
        />
        <Link to="/details/google-chrome">Chrome</Link>
        <Link to="/details/mozilla-firefox">Mozilla</Link>
        <Link to="/details/microsoft-edge">Edge</Link>
      </div>
 

</div>
  );
}

export default Home;
