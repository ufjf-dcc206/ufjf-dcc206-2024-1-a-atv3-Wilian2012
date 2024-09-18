import './style.css'

const END_POINT = "https://pokeapi.co/api/v2/pokemon/4";

const data = await fetch(END_POINT);
const json = await data.json();
document.querySelector<HTMLDivElement>('#app')!.innerHTML = json.name + json.types[0].type.name;
