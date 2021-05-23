const NavbarItem = ({ lineOne, lineTwo }) => {
    return (
        <div className="flex flex-col text-white cursor-pointer">
            <p>{lineOne}</p>
            <p className="font-bold">{lineTwo}</p>
        </div>
    )
}

export default NavbarItem
