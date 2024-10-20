import { useState } from "react";
import FAQ from "../HelpComponents/FAQ";
import "./Help.scss";
import Watch from "../HelpComponents/Watch";
import call_logo from "../../assets/call-logo.webp";
import email_logo from "../../assets/email-envelope.svg";
import form_logo from "../../assets/contact-form.svg";

const Help = () => {
    const [activeComponent, setActiveComponent] = useState<string>("faq");

    const renderComponent = () => {
        switch (activeComponent) {
            case "faq":
                return <FAQ />;
            case "watch":
                return <Watch />;
            case "moreQuestions":
            // return <MoreQuestions />;
            case "tips":
            // return <Tips />;
            default:
                return <FAQ />; // Default component if needed
        }
    };
    return (
        <>
            <div className="helpcontainer">
                <div className="sidebar">
                    <ul className="sidebar__list">
                        <li
                            className="sidebar__list--item"
                            onClick={() => setActiveComponent("faq")}
                        >
                            Frequently asked questions
                        </li>
                        <li
                            className="sidebar__list--item"
                            onClick={() =>
                                setActiveComponent("troubleshooting")
                            }
                        >
                            Troubleshooting tips
                        </li>
                        <li
                            className="sidebar__list--item"
                            onClick={() => setActiveComponent("watch")}
                        >
                            Watch and Learn
                        </li>
                        <li
                            className="sidebar__list--item"
                            onClick={() => setActiveComponent("appliancecare")}
                        >
                            Extend the life of your appliances
                        </li>
                    </ul>
                </div>
                <div className="component">{renderComponent()}</div>
            </div>
            <div className="stillneedhelp">
                <h1>Still need help?</h1>
                <p>
                    If you're having trouble finding the answer to your
                    question, we're here to help.
                </p>
                <div className="call contactsection">
                    <img
                        src={call_logo}
                        className="call__logo contactsection__logo"
                    />
                    <p>Call us at 0780000000</p>
                </div>
                <div className="email contactsection">
                    <img
                        src={email_logo}
                        className="email__logo contactsection__logo"
                    />
                    <p>Email us directly at fastappliancesgb@gmail.com</p>
                </div>
                <div className="bookingform contactsection">
                    <img
                        src={form_logo}
                        className="form__logo contactsection__logo"
                    />
                    <p>Use our Booking Form</p>
                </div>
            </div>
        </>
    );
};

export default Help;
