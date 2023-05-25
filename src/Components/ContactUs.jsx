function ContactUs () {
    return (
        <div className="contactus-section" id="contactus">
            <div className="contactus-container">
                <div className="contactus-quote">
                    <h1 className="quote">"Startapını bizimlə roketlə."</h1>
                </div>
                <div className="contactus-contacts">
                    <div className="contactus-links">
                        <a href="mailto:khansolutionx@gmail.com" className="contactus-contactlink">khansolutionx@gmail.com</a>
                        <a href="https://api.whatsapp.com/send?phone=+9940103282119&text=Hello,%20I%20am%20interested%20in%20your%20product." target="_blank" className="contactus-contactlink">(+994)10-328-21-19</a>
                    </div>
                    <div className="contactus-social">
                        <a href="https://www.instagram.com/solutionx_agency/" target="_blank" className="contactus-sociallink instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100091812249472" target="_blank" className="contactus-sociallink facebook"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=+9940103282119&text=Hello,%20I%20am%20interested%20in%20your%20product." target="_blank" className="contactus-sociallink whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;