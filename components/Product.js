import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

const Product = ({ id, title, image, price, description }) => {
    const dispatch = useDispatch()

    const addItemToBasket = (e) => {
        e.preventDefault()
        const product = {
            id,
            title,
            image,
            price,
            description,
        }

        //sending the product as an action to the redux store.
        dispatch(addToBasket(product))
    }

    return (
        <div className="flex flex-col mx-auto text-black bg-white w-[90%] items-center mb-5 p-4 rounded-md">
            <h1 className="font-bold">{title}</h1>
            <div className="mt-5 mb-auto">
                <img className="w-[200px] h-[200px]" src={image} alt="" />
            </div>

            <p className="truncate my-5 max-w-[95%]">{description}</p>

            <p className="font-bold text-xl">$&nbsp;{price}</p>

            <button
                onClick={addItemToBasket}
                className="focus:outline-none focus:border-none px-4 py-1 bg-[#F09727] mt-4 rounded-lg"
            >
                Add to Cart
            </button>
        </div>
    )
}

export default Product
