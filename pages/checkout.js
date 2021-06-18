import Navbar from '../components/Navbar'
import CheckoutProduct from '../components/CheckoutProduct'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

const checkout = () => {
    const items = useSelector(selectItems)

    return (
        <div className="bg-[#EAEDED] h-screen">
            <Head>
                <title>Amazon - Checkout</title>
            </Head>

            <Navbar />

            <h1 className="p-4 font-bold text-3xl">
                {items.length == 0
                    ? 'Your shopping basket is empty. Click on the add to cart button to add items to your basket.'
                    : 'Your shopping basket'}
            </h1>
            <div className="p-4 flex flex-col lg:flex-row space-x-0 lg:space-x-10">
                <div className="w-[100%]">
                    {/* <CheckoutProduct
                        id={1}
                        image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                        title="Men's cotton jacket"
                        description="Comfy cotton jacket"
                        price={200}
                    />

                    <CheckoutProduct
                        id={2}
                        image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        title="Men's T Shirt | Slim Fit"
                        description="Full sleeved T Shirt for men"
                        price={200}
                    /> */}

                    {items.map((item, i) => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </div>

                {/* <div className="bg-white p-4 rounded-lg">
                    <h1>Checkout Container</h1>
                </div> */}
            </div>
        </div>
    )
}

export default checkout
