import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import SuggestedProduct from '../../components/SuggestedProduct'
import requests from '../../utils/requests'

const SingleProduct = ({ results, products }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-full">
            <Head>
                <title>Amazon - {results.title}</title>
            </Head>

            <Navbar />

            <div>
                <div className="mt-10 flex flex-col lg:flex-row w-full">
                    <div className="w-full lg:w-[40%] flex items-center justify-center">
                        <Image src={results.image} width={425} height={425} />
                    </div>

                    <div className="flex flex-col w-full lg:w-[60%] p-10 space-y-10">
                        <p className="font-bold text-2xl">{results.title}</p>
                        <p className="font-medium text-xl">
                            {results.description}
                        </p>
                        <p className="text-5xl">${results.price}</p>
                        <button className="focus:outline-none focus:border-none px-4 py-1 bg-[#F09727] mt-4 rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="m-10">
                    <h1 className="text-2xl">
                        Similar products from '
                        <span className="font-bold">{results.category}</span>'
                    </h1>

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {products.map(
                            (product) =>
                                product.id != results.id && (
                                    <SuggestedProduct
                                        id={product.id}
                                        title={product.title}
                                        image={product.image}
                                        price={product.price}
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct

export async function getServerSideProps(context) {
    const product_id = context.query.id

    let data = []
    let products = []
    await fetch(`https://fakestoreapi.com/products/${product_id}`)
        .then((res) => res.json())
        .then((json) => (data = json))

    await fetch(`https://fakestoreapi.com/products/category/${data.category}`)
        .then((res) => res.json())
        .then((json) => (products = json))

    return {
        props: {
            results: data,
            products: products,
        },
    }
}
