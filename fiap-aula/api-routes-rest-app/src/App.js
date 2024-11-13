
import './App.css';
const url2= 'https://api.thecatapi.com/v1/images/search?limit=10';
const url = 'https://randomuser.me/api/?results=10';
const ul = document.getElementById('authors');

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

fetch(url)
  .then((resp) =>
    resp.json())
  .then(function(data){
    let authors = data.results;
    return authors.map(function(author){
      let li = createNode('li');
      let img = createNode('img');
      let span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })  
  .catch(function(error){
    console.log(error);

  })
 

function App() {
  return (

    <div className="App">
      <h1>Authors</h1>
      <ul id="authors"></ul>
    </div>
  );
}

export default App;
