import Navbar from '../components/Navbar'
import CheckoutProduct from '../components/CheckoutProduct'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from 'react-currency-formatter'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const checkout = () => {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)

    const [user] = useAuthState(auth)

    return (
        <div className="bg-[#EAEDED] min-h-screen">
            <Head>
                <title>Amazon - Checkout</title>
            </Head>

            <Navbar />

            <h1 className="p-4 font-bold text-3xl">
                {items.length == 0
                    ? 'Your shopping cart is empty. Click on the add to cart button to add items to your basket.'
                    : 'Your shopping cart'}
            </h1>
            <div className="p-4 flex flex-col lg:flex-row space-x-0 lg:space-x-10">
                <div className="w-[100%]">
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

                {items.length ? (
                    <div className="bg-white p-4 rounded-lg mt-10 lg:mt-0">
                        <h1 className="whitespace-nowrap">
                            Subtotal - {items.length} item(s):
                            <span className="font-bold">
                                <Currency quantity={total} currency="USD" />
                            </span>
                        </h1>

                        <button
                            disabled={!user}
                            className={`mt-10 ${
                                user
                                    ? 'focus:outline-none focus:border-none p-2 bg-[#F09727] rounded-lg font-bold w-full'
                                    : 'focus:outline-none focus:border-none p-2 bg-gray-500 rounded-lg font-bold w-full cursor-not-allowed'
                            }`}
                        >
                            {user
                                ? 'Proceed to Checkout'
                                : 'Sign in to checkout'}
                        </button>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default checkout
