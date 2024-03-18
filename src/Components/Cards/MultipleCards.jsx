import Cards from '../Cards/Cards.jsx'

export default function MultipleCards(params) {
    const array = Array.from({ length: params.qtd });
    return (
        <section className='cards'>
            {array.map((x, i) =>
                <Cards key={i} />
            )}
        </section>
    )
}
