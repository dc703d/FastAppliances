import "./Reviews.scss";

const Reviews = () => {
    return (
        <>
            <div className="reviews-section">
                <h2>See What Our Customers Say</h2>

                <div className="review-card">
                    <div className="stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p className="review-text">
                        "Amazing service provided by Mohammed for dryer repair.
                        Superb communication and service."
                    </p>
                    <p className="review-author">- Vikram Bishnoi</p>
                    <p className="review-date">Reviewed on: October 8, 2024</p>
                    <a href="https://g.co/kgs/CNR53wP" className="review-link">
                        View on Google
                    </a>
                </div>

                <div className="review-card">
                    <div className="stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p className="review-text">
                        "Mohamed was a very friendly repairman he really knows
                        his stuff he has 17 years experience and he charges fair
                        prices and he also tells you a little about washing
                        machine and appliance maintenance he also comes within
                        the hour."
                    </p>
                    <p className="review-author">- Adam</p>
                    <p className="review-date">Reviewed on: August 15, 2024</p>
                    <a href="https://g.co/kgs/j7HPxWs" className="review-link">
                        View on Google
                    </a>
                </div>

                <div className="review-card">
                    <div className="stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p className="review-text">
                        "Excellent service. Quick arrival and diagnosis.
                        Reasonable pricing too. Will recommend highly."
                    </p>
                    <p className="review-author">- Rohit Ladher</p>
                    <p className="review-date">Reviewed on: October 14, 2024</p>
                    <a href="https://g.co/kgs/8DgHEGW" className="review-link">
                        View on Google
                    </a>
                </div>
                <div className="google-reviews-card">
                    <h3>Google Reviews</h3>
                    <div className="rating-summary">
                        <div className="stars">
                            <span>4.8 </span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                        <p className="review-count">Based on 189 reviews</p>
                    </div>
                    <p className="summary-text">
                        Customers love our quick and professional service!
                    </p>
                    <a
                        href="https://www.google.com/search?q=fast+appliances+repair&rlz=1C5CHFA_enGB985GB985&oq=fast+a&gs_lcrp=EgZjaHJvbWUqBggAECMYJzIGCAAQIxgnMgYIARBFGDkyDAgCECMYJxiABBiKBTIQCAMQLhiDARjUAhixAxiABDIQCAQQLhiDARjUAhixAxiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzk2NGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8&zx=1728849046788&no_sw_cr=1#lrd=0x4876726e26f42b15:0x581c9fed20d51e45,3,,,,"
                        className="leave-review-btn"
                    >
                        Leave Your Review
                    </a>
                </div>
            </div>
        </>
    );
};

export default Reviews;
