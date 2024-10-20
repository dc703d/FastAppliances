import { useState } from "react";
import "./Watch.scss";
import wm_clean from "../../assets/video-thumbnails/wm_clean.png";
import wm_belt from "../../assets/video-thumbnails/wm_belt.png";
import washingissues from "../../assets/video-thumbnails/wm_top10issues.png";
import fridge_clean from "../../assets/video-thumbnails/fridge_clean.png";
import fridge_organise from "../../assets/video-thumbnails/fridge_organise.png";
import fridge_coils from "../../assets/video-thumbnails/fridge_coils.png";
import dishwasher_leak from "../../assets/video-thumbnails/dishwasher_leak.png";
import dishwasher_common from "../../assets/video-thumbnails/dishwasher_common.png";
import dishwasher_load from "../../assets/video-thumbnails/dishwasher_load.png";
import oven_calibrate from "../../assets/video-thumbnails/oven_calibrate.png";
import oven_common from "../../assets/video-thumbnails/oven_common.png";
import fan_clean from "../../assets/video-thumbnails/fan_clean.png";
import fan_common from "../../assets/video-thumbnails/fan_common.png";
import stove_burner from "../../assets/video-thumbnails/stove_burner.png";
import stove_clean from "../../assets/video-thumbnails/stove_clean.png";
import stove_common from "../../assets/video-thumbnails/stove_common.png";

const Watch = () => {
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
                <p className="question__title">Washing Machine</p>
                <div className={`answer ${visibleAnswers[0] ? "visible" : ""}`}>
                    <a href="https://youtu.be/wFubFK5vdOc?si=j2ZeuN-y90QAbEsX">
                        <h1 className="title">
                            How to clean your washing machine
                        </h1>
                    </a>

                    <div className="container">
                        <img src={wm_clean} />

                        <p>
                            Discover simple steps to clean your washing machine
                            effectively. Learn how to remove dirt, detergent
                            buildup, and odors for a fresher wash.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=lC5eqysbdsk">
                        <h1 className="title">
                            Troubleshooting the 10 most common issues
                        </h1>
                    </a>
                    <div className="container">
                        <img src={wm_belt} />
                        <p>
                            Is your washing machine making strange noises or not
                            spinning? This video guides you through common
                            problems and how to fix them.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=yC21q2-eAfI">
                        <h1 className="title">
                            DIY Repair: Replacing a Washing Machine Belt
                        </h1>
                    </a>
                    <div className="container">
                        <img src={washingissues} />
                        <p>
                            Learn how to replace a worn or broken belt in your
                            washing machine. Follow our step-by-step tutorial
                            for a successful repair.
                        </p>
                    </div>
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(1)}>
                <p className="question__title">Refrigerator</p>
                <div className={`answer ${visibleAnswers[1] ? "visible" : ""}`}>
                    <a href="https://www.youtube.com/watch?v=XRpDllJv24Y">
                        <h1 className="title">
                            How to Organize Your Refrigerator for Efficiency
                        </h1>
                    </a>

                    <div className="container">
                        <img src={fridge_organise} />

                        <p>
                            Maximize space and maintain freshness! This video
                            shows you how to organize your refrigerator for
                            optimal airflow and food preservation.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=ruBDHKOzs9k">
                        <h1 className="title">
                            Fixing Common Refrigerator Problems
                        </h1>
                    </a>
                    <div className="container">
                        <img src={fridge_clean} />
                        <p>
                            Is your refrigerator not cooling properly? Join us
                            as we troubleshoot common refrigerator issues and
                            offer simple solutions.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=sBwg9S-SKqE">
                        <h1 className="title">
                            How to Clean Refrigerator Coils
                        </h1>
                    </a>
                    <div className="container">
                        <img src={fridge_coils} />
                        <p>
                            Keep your fridge running efficiently! Learn how to
                            clean the coils to improve cooling performance and
                            extend appliance lifespan.
                        </p>
                    </div>
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(2)}>
                <p className="question__title">Dishwasher</p>
                <div className={`answer ${visibleAnswers[2] ? "visible" : ""}`}>
                    <a href="https://www.youtube.com/watch?v=T_RgHkuYMKU">
                        <h1 className="title">
                            How to Load Your Dishwasher for Optimal Cleaning
                        </h1>
                    </a>

                    <div className="container">
                        <img src={dishwasher_load} />

                        <p>
                            Ensure sparkling clean dishes every time! Watch our
                            video for tips on loading your dishwasher correctly
                            to maximize cleaning efficiency.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=Qa6OsgJqLmc">
                        <h1 className="title">
                            Troubleshooting Dishwasher Problems
                        </h1>
                    </a>
                    <div className="container">
                        <img src={dishwasher_common} />
                        <p>
                            Is your dishwasher leaving spots or not draining?
                            This video walks you through common problems and how
                            to resolve them quickly.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=8FPhgal_UYI">
                        <h1 className="title">
                            DIY Repair: Fixing a Dishwasher Leak
                        </h1>
                    </a>
                    <div className="container">
                        <img src={dishwasher_leak} />
                        <p>
                            Learn how to identify and repair leaks in your
                            dishwasher with this step-by-step guide. Save money
                            on service calls!
                        </p>
                    </div>
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(3)}>
                <p className="question__title">Oven</p>
                <div className={`answer ${visibleAnswers[3] ? "visible" : ""}`}>
                    <a href="https://www.youtube.com/watch?v=6czz5w2vZg4">
                        <h1 className="title">
                            How to Calibrate Your Oven for Accurate Cooking
                        </h1>
                    </a>

                    <div className="container">
                        <img src={oven_calibrate} />

                        <p>
                            Ensure sparkling clean dishes every time! Watch our
                            video for tips on loading your dishwasher correctly
                            to maximize cleaning efficiency.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=Tt4cz9nJhEk">
                        <h1 className="title">
                            Common Oven Problems and Fixes
                        </h1>
                    </a>
                    <div className="container">
                        <img src={oven_common} />
                        <p>
                            Is your dishwasher leaving spots or not draining?
                            This video walks you through common problems and how
                            to resolve them quickly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(4)}>
                <p className="question__title">Stove</p>
                <div className={`answer ${visibleAnswers[4] ? "visible" : ""}`}>
                    <a href="https://www.youtube.com/watch?v=gPSRdHkZC10">
                        <h1 className="title">
                            How to Clean Stovetops Effectively
                        </h1>
                    </a>

                    <div className="container">
                        <img src={stove_clean} />

                        <p>
                            Keep your stovetop sparkling clean! Discover the
                            best cleaning methods for gas, electric, and
                            induction stovetops.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=L3xj2PbI9ts">
                        <h1 className="title">
                            Troubleshooting Common Stove Problems
                        </h1>
                    </a>
                    <div className="container">
                        <img src={stove_common} />
                        <p>
                            Is your stove not heating up? Join us as we
                            troubleshoot and fix common issues that may arise
                            with your cooking appliance.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=SFlOIqfpbHs">
                        <h1 className="title">Replacing a Stove Burner</h1>
                    </a>
                    <div className="container">
                        <img src={stove_burner} />
                        <p>
                            Learn how to replace a faulty stove burner in this
                            easy-to-follow DIY video. Get your stove back in
                            working order quickly!
                        </p>
                    </div>
                </div>
            </div>

            <div className="question box" onClick={() => toggleAnswer(5)}>
                <p className="question__title">Extractor Hoods</p>
                <div className={`answer ${visibleAnswers[5] ? "visible" : ""}`}>
                    <a href="https://www.youtube.com/watch?v=c87kVD4BOxc">
                        <h1 className="title">
                            How to Clean Your Extractor Fan Filter
                        </h1>
                    </a>

                    <div className="container">
                        <img src={fan_clean} />

                        <p>
                            Maintain optimal performance! Learn how to clean
                            your extractor fan effectively to reduce grease
                            buildup and improve airflow.
                        </p>
                    </div>
                    <a href="https://www.youtube.com/watch?v=N-5F28vEBYA">
                        <h1 className="title">
                            Troubleshooting Common Extractor Fan Issues
                        </h1>
                    </a>
                    <div className="container">
                        <img src={fan_common} />
                        <p>
                            Is your extractor fan not functioning properly? This
                            video covers common issues and easy fixes to restore
                            its performance.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Watch;
