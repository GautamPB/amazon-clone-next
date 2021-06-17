import Image from 'next/image'
import { useRouter } from 'next/router'

const SuggestedProduct = ({ id, title, image, price }) => {
    const router = useRouter()

    return (
        <div
            className="flex flex-col items-center m-5 p-2 cursor-pointer rounded-lg space-y-5 shadow-lg"
            onClick={() => router.push(`/product/${id}`)}
        >
            <h1 className="font-bold">{title}</h1>

            <div>
                <Image src={image} width={100} height={100} />
            </div>

            <p className="font-bold text-xl">${price}</p>
        </div>
    )
}

export default SuggestedProduct
