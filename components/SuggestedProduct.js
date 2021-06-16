import Image from 'next/image'
import { useRouter } from 'next/router'

const SuggestedProduct = ({ id, title, image, price }) => {

    const router = useRouter()

    return (
        <div className="flex flex-col items-center shadow-xl m-5 p-2 rounded-lg space-y-5 cursor-pointer" onClick = {() => router.push(`/product/${id}`)}>
            <h1>{title}</h1>
            
            <div>
                <Image src={image} width={150} height={150} />
            </div>

            <p className="text-xl font-bold">${price}</p>
        </div>
    )
}

export default SuggestedProduct
