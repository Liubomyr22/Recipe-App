import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "d01fb558";
  const APP_KEY = "5abb39770df019567fece047ab50855f";

  const [recipe,setRecipes] = useState([]);
  const [input,setInput] = useState('')
  const [search,setSearch] = useState('chicken')
  
  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
      .then((response) => response.json())
      .then((json) => setRecipes(json.hits));
  },[search])

  const updateInput = e =>{
    e.preventDefault()
    setInput(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setSearch(input)
  }

//  console.log(recipe)
  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input type="text" value={input} onChange={updateInput} />
        <button type="submit">Serch</button>
      </form>
      {recipe.map((x) => (
         <Recipe key={x.recipe.label} title={x.recipe.label} img={x.recipe.image} />
      ))}
    </div>
  );
}

export default App;
