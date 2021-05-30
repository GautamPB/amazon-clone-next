import Product from './Product'

const HomePage = ({ results }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 z-0 mt-[-10%] w-full relative">
            {results.map((result) => (
                <Product
                    id={result.id}
                    title={result.title}
                    image={result.image}
                    price={result.price}
                />
            ))}
        </div>
    )
}

export default HomePage
