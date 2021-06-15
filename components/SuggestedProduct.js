const SuggestedProduct = ({ id, title, image, price }) => {
    return (
        <div className="flex flex-col items-center bg-red-500 m-5 p-2 rounded-lg">
            <h1>{title}</h1>
        </div>
    )
}

export default SuggestedProduct
