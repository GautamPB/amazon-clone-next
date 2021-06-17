const CheckoutProduct = ({ id, image, title, description, price }) => {
    return (
        <div className="flex flex-col md:flex-row md:space-x-10 bg-white rounded-lg p-4 mb-4">
            <div className="flex w-[100px] h-[120px]">
                <img src={image} alt="" className="w-[100px] h-[120px]" />
            </div>

            <div className="flex flex-col space-y-4">
                <h1 className="font-bold">{title}</h1>
                <p className="font-semibold">$&nbsp;{price}</p>

                <p>{description}</p>
            </div>
        </div>
    )
}

export default CheckoutProduct
