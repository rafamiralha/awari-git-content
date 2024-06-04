import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Card.css";
import Card from "./Card";
function Details () {
  const navegadores = {
    "google-chrome":{
      name: "Chrome",
      description: " A browser called google",
      
    },
    "mozilla-firefox":{
      name: "Mozilla",
      description: " A browser called firefox",
     
    },
    "microsoft-edge":{
      name: "Edge",
      description: " A browser called Edge",
      
    }
 

  }



  const {id} = useParams();
  return (
    <div>
     <Header/>
     <div className="card-container">
      <Card
          title = {navegadores[id]?.name || "Navegador Não encontrado"}
          description = {navegadores[id]?.description}

        />
     </div>

    </div>
  );
}

export default Details;
