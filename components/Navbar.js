import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'
import NavbarItem from './NavbarItem'
import { useState } from 'react'

const Navbar = () => {
    const [search, setSearch] = useState('')

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        console.log(search)
        setSearch('')
    }

    return (
        <div className="flex bg-[#131921] w-[100%] px-4 items-center flex-col lg:flex-row py-2 justify-between">
            <div className="lg:flex items-center w-[100%]">
                <div className="flex">
                    <div className="cursor-pointer">
                        <Image src="/amazon-logo.png" width={150} height={70} />
                    </div>

                    <div className="flex items-center space-x-4 lg:hidden ml-auto">
                        <div className="flex space-x-4">
                            <NavbarItem
                                lineOne="Hello, Sign In"
                                lineTwo="Accounts & Lists"
                            />
                            <NavbarItem lineOne="Returns" lineTwo="& Orders" />
                        </div>

                        <div className="flex items-center cursor-pointer">
                            <ShoppingCartIcon className="text-white h-10" />
                            <div className="text-white font-bold flex flex-col justify-center items-center">
                                <p>0</p>
                                <p>Cart</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-[100%] mx-2.5 lg:mx-5 items-center">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search Amazon"
                        className="w-[100%]  py-2.5 px-2 rounded-lg outline-none border-none"
                    />
                    <SearchIcon
                        className="h-12 bg-[#CD9402] p-2.5 rounded-lg cursor-pointer"
                        onClick={handleSubmitSearch}
                    />
                </div>
            </div>

            <div className="items-center space-x-4 hidden lg:flex">
                <div className="flex space-x-4">
                    <NavbarItem
                        lineOne="Hello, Sign In"
                        lineTwo="Accounts & Lists"
                    />
                    <NavbarItem lineOne="Returns" lineTwo="& Orders" />
                </div>

                <div className="flex items-center cursor-pointer">
                    <ShoppingCartIcon className="text-white h-10" />
                    <div className="text-white font-bold flex flex-col justify-center items-center">
                        <p>0</p>
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
