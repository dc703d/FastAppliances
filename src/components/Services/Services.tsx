import "./Services.scss";

const Services = () => {
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
        </>
    );
};

export default Services;
