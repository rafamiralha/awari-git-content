import { useParams } from "react-router-dom";
import Header from "./Header";
function Details () {
  const navegadores = {
    "google-chrome":{
      name: "Chrome",
      description: " A browser called google",
      image: "fake logo"
    },
    "mozilla-firefox":{
      name: "Mozilla",
      description: " A browser called firefox",
      image: "fake logo"
    },
    "microsoft-edge":{
      name: "Edge",
      description: " A browser called Edge",
      image: "fake logo" 
    }
 

  }



  const {id} = useParams();
  return (
    <div>
     <Header/>
    <h1>details</h1>
    <h2>{navegadores[id]?.name || "Navegador Não encontrado"}</h2>
    <p>{navegadores[id]?.description}</p>
    </div>
  );
}

export default Details;
