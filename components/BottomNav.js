import { useRouter } from 'next/router'
import requests from '../utils/requests'

const BottomNav = () => {
    const router = useRouter()

    return (
        <div className="flex px-4 py-2 w-full bg-[#2B3C4E] text-white">
            <div className="flex items-center space-x-2.5 lg:space-x-5 flex-grow">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <p
                        onClick={() => router.push(`/?category=${key}`)}
                        className="cursor-pointer"
                    >
                        {title}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default BottomNav
