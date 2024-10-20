import { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
    const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>(
        Array(6).fill(false)
    );

    const toggleAnswer = (index: number) => {
        setVisibleAnswers((prevVisibleAnswers) => {
            const updatedVisibility = [...prevVisibleAnswers];
            updatedVisibility[index] = !updatedVisibility[index];
            return updatedVisibility;
        });
    };

    return (
        <>
            <div className="question box" onClick={() => toggleAnswer(0)}>
                How do I know when it's time to repair or replace an appliance?
                <div className={`answer ${visibleAnswers[0] ? "visible" : ""}`}>
                    Deciding whether to repair or replace an appliance can
                    depend on several factors. Generally, if the repair cost is
                    more than 50% of the price of a new appliance, it might make
                    more financial sense to replace it. Age is another
                    consideration—if your appliance is over 10 years old, it may
                    be nearing the end of its lifespan, and you could be looking
                    at more frequent repairs in the future.
                    <br />
                    <br />
                    Additionally, newer appliances tend to be more
                    energy-efficient, which can save you money on utility bills
                    over time. If your appliance has been unreliable or
                    frequently breaking down, replacing it may offer peace of
                    mind, knowing you're less likely to face similar issues
                    soon.
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(1)}>
                Do you offer emergency repair services?
                <div className={`answer ${visibleAnswers[1] ? "visible" : ""}`}>
                    Yes, we understand that appliance breakdowns can happen at
                    the most inconvenient times. That's why we offer 24/7
                    emergency repair services to get your home back up and
                    running as soon as possible.
                    <br />
                    <br /> Whether it's a refrigerator that stops cooling in the
                    middle of summer or a washing machine that breaks down with
                    a full load of laundry inside, our team is ready to respond
                    quickly.
                    <br />
                    <br /> You can call us at 07827045534 any time, day or
                    night, to schedule an urgent repair. We aim to get a
                    technician to your location within hours to resolve the
                    issue efficiently.
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(2)}>
                What brands do you service?
                <div className={`answer ${visibleAnswers[2] ? "visible" : ""}`}>
                    We take pride in being able to service a wide variety of
                    appliance brands, including both high-end and more common
                    household names. Our team is experienced in repairing
                    appliances from Samsung, LG, Bosch, Whirlpool, and GE, among
                    others. No matter the brand or model, we stay up-to-date
                    with the latest technologies and techniques to ensure that
                    we can provide a reliable and efficient repair.
                    <br />
                    <br />
                    If you're unsure whether we service your specific brand,
                    feel free to give us a call, and we'll be happy to confirm.
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(3)}>
                How long does a typical repair take?
                <div className={`answer ${visibleAnswers[3] ? "visible" : ""}`}>
                    The length of time it takes to complete a repair can vary
                    depending on the complexity of the issue and the type of
                    appliance. For straightforward repairs, such as replacing a
                    belt on a washing machine or fixing a simple electrical
                    issue, the repair usually takes around 1-2 hours. However,
                    if we need to order specific parts or the appliance has
                    multiple issues that require attention, it could take
                    longer. <br />
                    <br />
                    Our technicians strive to diagnose the problem quickly and
                    give you a clear estimate of the time required as soon as
                    they inspect the appliance. In cases where parts need to be
                    ordered, we always try to expedite the process so that your
                    appliance is back in working order as soon as possible.
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(4)}>
                Can I book a service online?
                <div className={`answer ${visibleAnswers[4] ? "visible" : ""}`}>
                    Yes, we offer the convenience of booking a service directly
                    through our website. Simply navigate to our booking form,
                    where you can fill in your details and select the type of
                    appliance that needs repairing. Once submitted, a member of
                    our team will confirm the appointment, and we'll send you a
                    reminder before the scheduled visit. Online booking is a
                    great option if you're busy and want to secure a repair slot
                    without making a phone call. <br />
                    <br />
                    If you have any special requirements or urgent repair needs,
                    feel free to note that in your booking form, and we'll do
                    our best to accommodate you.
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(5)}>
                What are your service areas?
                <div className={`answer ${visibleAnswers[5] ? "visible" : ""}`}>
                    We are proud to offer our repair services across a broad
                    geographic area. Our primary service areas include London,
                    Surrey, Reading, but we also cover many surrounding suburbs
                    and rural areas. If you are located nearby but outside our
                    usual service area, we still encourage you to get in touch.
                    We often make exceptions and try to accommodate as many
                    customers as possible, depending on our technician
                    availability.
                    <br />
                    <br />
                    Whether you're in the heart of the city or in a more remote
                    area, we aim to provide prompt, reliable service to meet
                    your repair needs.
                </div>
            </div>
        </>
    );
};

export default FAQ;
