import Product from './Product'

const HomePage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 z-10 mt-[-10%] w-full z-0">
            <Product
                title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
                image="https://m.media-amazon.com/images/I/71Lx9l3NivL._AC_UY218_.jpg"
                price={29999}
            />
            <Product
                title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                image="https://m.media-amazon.com/images/I/616bhfyXimL._AC_UY218_.jpg"
                price={1999}
            />
            <Product
                title="PS4 1TB Slim Bundled with Spider-Man, GT Sport, Ratchet & Clank And PSN 3Month"
                image="https://m.media-amazon.com/images/I/81cIK-WlKDL._AC_UY218_.jpg"
                price={29990}
            />
            <Product
                title="PS4 The Last of Us Part II (PS4)"
                image="https://m.media-amazon.com/images/I/81l+hkZEABL._AC_UL320_.jpg"
                price={1978}
            />

            <Product
                title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
                image="https://m.media-amazon.com/images/I/71Lx9l3NivL._AC_UY218_.jpg"
                price={29999}
            />
            <Product
                title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                image="https://m.media-amazon.com/images/I/616bhfyXimL._AC_UY218_.jpg"
                price={1999}
            />
            <Product
                title="PS4 1TB Slim Bundled with Spider-Man, GT Sport, Ratchet & Clank And PSN 3Month"
                image="https://m.media-amazon.com/images/I/81cIK-WlKDL._AC_UY218_.jpg"
                price={29990}
            />
            <Product
                title="PS4 The Last of Us Part II (PS4)"
                image="https://m.media-amazon.com/images/I/81l+hkZEABL._AC_UL320_.jpg"
                price={1978}
            />
        </div>
    )
}

export default HomePage
