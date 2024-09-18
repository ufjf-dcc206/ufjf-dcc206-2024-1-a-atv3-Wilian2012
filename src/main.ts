import './style.css'

const END_POINT = "https://pokeapi.co/api/v2/pokemon/1";

fetch(END_POINT)
  .then(data => data.json())
  .then(pkm => {

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = JSON.stringify(pkm);

  }

  );