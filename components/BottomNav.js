import MenuIcon from '@material-ui/icons/Menu'

const BottomNav = () => {
    return (
        <div className="flex px-4 py-2 w-full bg-[#2B3C4E] text-white">
            <div className="flex items-center space-x-2.5 lg:space-x-5 flex-grow">
                <div className="flex items-center space-x-1 cursor-pointer">
                    <MenuIcon />
                    <p>All</p>
                </div>

                <p className="cursor-pointer">Electronics</p>
                <p className="cursor-pointer">Jewellery</p>
                <p className="cursor-pointer">Men's Clothing</p>
                <p className="cursor-pointer">Women's Clothing</p>
            </div>
        </div>
    )
}

export default BottomNav
