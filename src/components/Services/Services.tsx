import "./Services.scss";
import image1 from "../../assets/appliances/washing-machine.svg";
import image2 from "../../assets/appliances/oven.svg";
import image3 from "../../assets/appliances/refrigerator.svg";
import image4 from "../../assets/appliances/stove.svg";
import image5 from "../../assets/appliances/dishwasher.svg";
import image6 from "../../assets/appliances/extractor-hood-kitchen.svg";
import { useState } from "react";

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        {
            image: image1,
            title: "Washing Machine Repairs",
            description:
                "Is your washing machine not spinning or draining properly? We tackle problems such as water leaks, error codes, and drum issues to get your laundry back on track.",
        },
        {
            image: image2,
            title: "Oven Repairs",
            description:
                "From faulty thermostats to broken heating elements, we diagnose and fix all common oven issues quickly and efficiently.",
        },
        {
            image: image3,
            title: "Refrigerator Repairs",
            description:
                "If your fridge is not cooling, making strange noises, or leaking water, we diagnose and repair all common refrigerator problems, ensuring your food stays fresh.",
        },
        {
            image: image4,
            title: "Stove Repairs",
            description:
                "Whether it's uneven heating or a burner that won't light, our technicians can fix various stove issues, ensuring consistent cooking performance for your meals.",
        },
        {
            image: image5,
            title: "Dishwasher Repairs",
            description:
                "Experiencing leaks or poor cleaning performance? Our experts address issues like clogged drains, malfunctioning spray arms, and faulty pumps to restore your dishwasher's efficiency.",
        },
        {
            image: image6,
            title: "Extractor Hood Repairs",
            description:
                "From inadequate ventilation to strange noises, we resolve common extractor fan issues to keep your kitchen air fresh and free of cooking odors.",
        },
    ];

    const totalSlides = Math.ceil(cards.length / 3);

    const moveSlide = (direction: number) => {
        setCurrentSlide((prevSlide: number) => {
            let newSlide = prevSlide + direction;
            if (newSlide < 0) return 0;
            if (newSlide >= totalSlides) return totalSlides - 1;
            return newSlide;
        });
    };
    return (
        <>
            <div className="services">
                <h1 className="services__heading">Our Services</h1>
                <h4 className="services__tagline">
                    Comprehensive Appliance Solutions: From Installation to
                    Servicing, Tailored for Homes and Businesses
                </h4>
                <div className="services__list">
                    <div className="services__list--domestic services__list--box">
                        <h1>Domestic</h1>
                        <p className="services__list--box--line">
                            ----------------------------------------------------
                        </p>
                        <p className="services__list--box--para">
                            We provide expert installation, repair, and
                            servicing of household appliances. Our skilled
                            technicians ensure your home appliances operate
                            efficiently, making everyday life easier.
                        </p>
                        <div className="services__list--box--buttoncontainer">
                            <button className="services__list--box--button services__list--box--button--domestic">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="services__list--commercial services__list--box">
                        <h1>Commercial</h1>
                        <p className="services__list--box--line">
                            ----------------------------------------------------
                        </p>
                        <p className="services__list--box--para">
                            We offer comprehensive solutions for commercial
                            appliances, from installation to maintenance. Our
                            reliable services help businesses minimize downtime
                            and keep operations running smoothly.
                        </p>
                        <div className="services__list--box--buttoncontainer">
                            <button className="services__list--box--button services__list--box--button--commercial">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="services__list--agency services__list--box">
                        <h1>Landlord and Agency</h1>
                        <p className="services__list--box--line">
                            ----------------------------------------------------
                        </p>
                        <p className="services__list--box--para">
                            Tailored services for landlords and property
                            agencies, including appliance installation and
                            maintenance. We ensure properties are tenant-ready
                            with prompt and professional repairs.
                        </p>
                        <div className="services__list--box--buttoncontainer">
                            <button className="services__list--box--button services__list--box--button--agency">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-carousel">
                <h1 className="card-carousel__heading">
                    We can help you with:
                </h1>
                <div
                    className="card-carousel-container"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <img
                                src={card.image}
                                alt={`Description for ${card.title}`}
                            />
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-button prev"
                    onClick={() => moveSlide(-1)}
                >
                    &#10094;
                </button>
                <button
                    className="carousel-button next"
                    onClick={() => moveSlide(1)}
                >
                    &#10095;
                </button>
            </div>
        </>
    );
};

export default Services;
