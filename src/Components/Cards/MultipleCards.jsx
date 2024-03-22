import Cards from '../Cards/Cards.jsx'
import { useEffect, useState } from "react";
import api from "../../Api/api.js";
import Loading from '../LoadingScreen/LoadingScreen.jsx'

export default function MultipleCards() {
    const [cards, setCard] = useState();
    useEffect(() => {
        api
            .get("Anuncios")
            .then((response) => setCard(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);


    return (

        cards ? <section className='cards'>
            {cards.map(card =>
                <Cards key={card.id} Titulo={card.titulo} Descricao={card.descricao} ></Cards>
            )}
        </section>  : <Loading />
    )
}
