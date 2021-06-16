import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'
import NavbarItem from './NavbarItem'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/router'

const Navbar = () => {
    const [search, setSearch] = useState('')

    const [user] = useAuthState(auth)

    const router = useRouter()

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        console.log(search)
        setSearch('')
    }

    return (
        <div className="flex bg-[#131921] w-[100%] px-4 items-center flex-col lg:flex-row py-2 justify-between sticky top-0 z-10">
            <div className="lg:flex items-center w-[100%]">
                <div className="flex">
                    <div
                        className="cursor-pointer flex items-center"
                        onClick={() => router.push('/')}
                    >
                        <Image src="/amazon-logo.png" width={150} height={70} />
                        {/* <Image
                            src="/flag.png"
                            width={25}
                            height={15}
                            className="rounded-sm"
                        /> */}
                    </div>

                    <div className="flex items-center space-x-4 lg:hidden ml-auto">
                        <div className="flex space-x-4">
                            <div
                                onClick={() =>
                                    user
                                        ? auth.signOut()
                                        : router.push('/login')
                                }
                            >
                                <NavbarItem
                                    lineOne={`Hello, ${
                                        user ? user.email : 'Sign In'
                                    }`}
                                    lineTwo="Accounts & Lists"
                                />
                            </div>
                            <NavbarItem lineOne="Returns" lineTwo="& Orders" />
                        </div>

                        <div
                            className="flex cursor-pointer"
                            onClick={() => router.push('/checkout')}
                        >
                            <ShoppingCartIcon className="text-white h-10" />
                            <div className="font-bold flex flex-col">
                                <p className="bg-[#CD9402] text-black relative px-2 rounded-[100%] right-3 -top-2">
                                    0
                                </p>
                                {/* <p>Cart</p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-[100%] mx-2.5 lg:mx-5 items-center rounded-lg">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search Amazon"
                        className="w-[100%]  py-2.5 px-2 outline-none border-none bg-white"
                    />
                    <SearchIcon
                        className="h-12 bg-[#CD9402] p-2.5 cursor-pointer"
                        onClick={handleSubmitSearch}
                    />
                </div>
            </div>

            <div className="items-center space-x-4 hidden lg:flex">
                <div className="flex space-x-4">
                    <div
                        onClick={() =>
                            user ? auth.signOut() : router.push('/login')
                        }
                    >
                        <NavbarItem
                            lineOne={`Hello, ${user ? user.email : 'Sign In'}`}
                            lineTwo="Accounts & Lists"
                        />
                    </div>

                    <NavbarItem lineOne="Returns" lineTwo="& Orders" />
                </div>

                <div
                    className="flex cursor-pointer"
                    onClick={() => router.push('/checkout')}
                >
                    <ShoppingCartIcon className="text-white h-10" />
                    <div className="font-bold flex flex-col">
                        <p className="bg-[#CD9402] text-black relative px-2 rounded-[100%] right-3 -top-2">
                            0
                        </p>
                        {/* <p>Cart</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
