import Navbar from '../components/Navbar'
import CheckoutProduct from '../components/CheckoutProduct'
import Head from 'next/head'

const checkout = () => {
    return (
        <div className="bg-[#EAEDED] h-screen">
            <Head>
                <title>Amazon - Checkout</title>
            </Head>

            <Navbar />

            <h1 className="p-4 font-bold text-lg">Your shopping basket</h1>
            <div className="p-4 flex flex-col lg:flex-row space-x-10">
                <div className="w-[100%]">
                    <CheckoutProduct
                        id={1}
                        image="https://m.media-amazon.com/images/I/61urU8k2lFL._AC_UY218_.jpg"
                        title="OnePlus 9 5G (Astral Black, 12GB RAM, 256GB Storage)"
                        description="New phone by OnePlus"
                        price={54999}
                    />

                    <CheckoutProduct
                        id={2}
                        image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        title="Men's T Shirt | Slim Fit"
                        description="Full sleeved T Shirt for men"
                        price={200}
                    />
                </div>

                <div className="bg-white p-4 rounded-lg">
                    <h1>Checkout Container</h1>
                </div>
            </div>
        </div>
    )
}

export default checkout
