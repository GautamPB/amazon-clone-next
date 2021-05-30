import { Button } from '@material-ui/core'

const Product = ({ id, title, image, price, description }) => {
    return (
        <div className="flex flex-col mx-auto text-black bg-white w-[90%] items-center mb-5 p-4 rounded-md">
            <h1 className="font-bold">{title}</h1>
            <div className="mt-5 mb-auto">
                <img className="w-[200px] h-[200px]" src={image} alt="" />
            </div>

            <p className="truncate my-5 max-w-[95%]">{description}</p>

            <p className="font-bold text-xl">$&nbsp;{price}</p>

            <button className="focus:outline-none focus:border-none px-4 py-1 bg-[#F09727] mt-4 rounded-lg">
                Add to Cart
            </button>
        </div>
    )
}

export default Product
