import "./HeadingBox.scss";
import call_logo from "../../assets/call-logo.webp";

const HeadingBox = () => {
    return (
        <>
            <div className="headingbox">
                <div className="headingbox__image">
                    <div className="headingbox__text">
                        <h1 className="headingbox__text--heading">
                            Need a fix? We're here for all your appliance needs.
                        </h1>
                        <ul>
                            <li className="headingbox__text--bullet">
                                Same or Next Day visits offered
                            </li>
                            <li className="headingbox__text--bullet">
                                Certified technicians for all appliance brands
                            </li>
                            <li className="headingbox__text--bullet">
                                Affordable, Transparent pricing with no hidden
                                fees
                            </li>
                        </ul>
                    </div>

                    <button className="headingbox__contact">
                        <img
                            src={call_logo}
                            className="headingbox__contact--phone"
                        />
                        Call Us
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeadingBox;
