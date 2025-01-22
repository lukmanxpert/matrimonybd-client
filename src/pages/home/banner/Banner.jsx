import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full h-1/2 md:h-[calc(100vh-4rem)]"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/Ng0dPpC/romantic-couple-city-celebrating-engagement-together-min.jpg"
                            alt="Romantic Couple"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h2 className="text-4xl font-bold">Celebrate Your Love</h2>
                                <p className="mt-2 text-lg">Make every moment unforgettable with our perfect engagement ideas.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/yhrxkKQ/groom-putting-ring-bride-s-finger-min.jpg"
                            alt="Groom Putting Ring"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h2 className="text-4xl font-bold">The Perfect Proposal</h2>
                                <p className="mt-2 text-lg">Witness a timeless moment of love and commitment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co/Hdtc4xx/wedding-1836315-1920.jpg"
                            alt="Wedding Ceremony"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h2 className="text-4xl font-bold">Your Dream Wedding</h2>
                                <p className="mt-2 text-lg">Turn your dream day into a reality with our expert planning.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
