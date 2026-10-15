import { useState } from "react";

function Card({cards}) {
    const [filter, setFilter] = useState("Todas");
    const [search, setSearch] = useState("");
    const visible = cards.filter((card) => (filter === "Todas"  || card.type === filter || card.id === filter)
    && card.name.includes(search));


    return (
        <>
        <h1>Tenho {cards.length} cartas</h1>
        <input value={search} onChange={(e) => setSearch(e.target.value)}/><br></br>
        <br></br><button onClick={() => setFilter("Criatura")}>
            Só criaturas
        </button>
        <button onClick={() => setFilter("Todas")}>
            Todas
        </button>
        <button onClick={() => setFilter("Feitiço")}>
            Só feitiços
        </button>
        <button onClick={() => setFilter("Estrutura")}>
            Só estroturas
        </button>
        <button onClick={() => setFilter((Math.floor(Math.random() * cards.length))+1)}>
            RCG
        </button>


        {visible.map((card) => (
            <li key={card.id}>
            <h1>{card.name}</h1>
            <p>Tipo: {card.type}, 
            {card.attack >= 6 ? <strong>Ataque: {card.attack},</strong> : <>Ataque: {card.attack}, </>} Defesa: {card.defense}</p>
            </li>
        ))}</>
    );
}

export default Card;