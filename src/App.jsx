import Card from "./Card";


const cards = [
  { id: 1, name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { id: 2, name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { id: 3, name: "Raio Carmesim", type: "Feitiço", attack: 6, defense: 0 },
  { id: 4, name: "Muralha de Granito", type: "Estrutura", attack: 0, defense: 10 },
  { id: 5, name: "Lobo das Cinzas", type: "Criatura", attack: 5, defense: 3 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
      <Card cards={cards}/>
    </main>
  );
}

export default App;
