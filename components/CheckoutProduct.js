import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({ id, image, title, description, price }) => {
    const dispatch = useDispatch()

    const addItemToBasket = (e) => {
        e.preventDefault()
        const product = {
            id,
            title,
            image,
            description,
            price,
        }

        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = (e) => {
        e.preventDefault()
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className="flex md:flex-row bg-white rounded-lg p-4 mb-4">
            <div className="flex flex-col lg:flex-row w-[90%]">
                <div>
                    <Image src={image} width={200} height={200} />
                </div>

                <div className="flex flex-col space-y-4 md:ml-10">
                    <h1 className="font-bold">{title}</h1>
                    <p className="font-semibold">$&nbsp;{price}</p>

                    <p>{description}</p>
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <button
                    className="focus:outline-none focus:border-none p-2 bg-[#F09727] rounded-lg font-bold w-full"
                    onClick={removeItemFromBasket}
                >
                    Remove from Cart
                </button>

                <button
                    className="focus:outline-none focus:border-none p-2 bg-[#F09727] rounded-lg font-bold w-full"
                    onClick={addItemToBasket}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
