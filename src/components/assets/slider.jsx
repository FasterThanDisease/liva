import { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function Slider() {

    const router = useRouter();

    const services = [
        {
            id: 1,
            img: '/service3.webp',
            text: 'Reifenwechsel, Einlagerung und Beratung – wir sorgen für sicheren Grip auf der Straße.',
            header: 'Reifenservice',
            alt: 'Reifenservice KFZ Meisterwerkstatt Boxenstopp ',
            link: '/service/reifenservice',
        },
        {
            id: 2,
            img: '/service2.webp',
            text: 'Von kleinen Reparaturen bis zu größeren Instandsetzungen – wir kümmern uns darum.',
            header: 'Instandsetzung',
            link: '/services/instandsetzung',
            alt: 'Instandsetzungsservice KFZ Meisterwerkstatt Boxenstopp'
        },
        {
            id: 3,
            img: '/service1.webp',
            text: 'Einfach und bequem – komplette Abwicklung, inklusive Versicherungen und Gutachten.',
            header: 'Service-Abwicklung',
            link: '/services/serviceabwicklung',
            alt: 'Serviceabwicklung KFZ Meisterwerkstatt Boxenstopp'
        },
        {
            id: 4,
            img: '/service4.webp',
            link: '/services/tüv',
            alt: 'TÜV Service KFZ Meisterwerkstatt Boxenstopp',
            text: 'Kein Stress bei der Hauptuntersuchung. Wir bereiten Ihr Fahrzeug optimal vor.',
            header: 'TÜV-Service',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row" style={{}}>


                    <div className="slider-container">
                        <button className="arrow left" onClick={scrollLeft}>
                            <FaChevronLeft />
                        </button>
                        <div className="slider" ref={sliderRef}>
                            {services.map((item, i) => (
                                <div className="slider-item pointer" onClick={() => router.push('/leistungen')} key={i}>
                                    <img src={item.img} alt={item.alt} />
                                    <div className="info">
                                        <p className='fs-5 '><strong>{item.header}</strong></p>
                                        <p className='text-center text-secondary'>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="arrow right" onClick={scrollRight}>
                            <FaChevronRight />
                        </button>
                    </div>


                </div>
            </div>
        </main>
    );
};

