import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Banner = () => {
    return (
        <div className="z-auto">
            <Carousel
                showArrows={false}
                showStatus={false}
                interval={5000}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoFocus={false}
                autoPlay={true}
                className="w-full xl:w-[80%] mx-auto"
            >
                <div>
                    <img src="/banner_picture-1.jpg" alt="" />
                </div>

                <div>
                    <img src="/banner_picture-2.jpg" alt="" />
                </div>

                <div>
                    <img src="/banner_picture-3.jpg" alt="" />
                </div>

                <div>
                    <img src="/banner_picture-4.jpg" alt="" />
                </div>

                <div>
                    <img src="/banner_picture-5.jpg" alt="" />
                </div>

                <div>
                    <img src="/banner_picture-6.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
