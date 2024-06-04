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
          link = "/details/google-chrome"
        />
        <Card
          title = "Mozilla"
          description = " A browser called firefox"
          link = "/details/mozilla-firefox"
        />
        <Card
          title = "Edge"
          description = " A browser called Edge"
          link = "/details/microsoft-edge"
        />
      </div>
 

</div>
  );
}

export default Home;
