import img03 from "./Images/SolutionX-illustrattion-02.png"

function AboutUs () {
    return (
        <div className="aboutus-section" id="aboutus">
            <div className="aboutus-container">
                <div className="aboutus-img-box">
                    <img src={img03} alt="aboutus image" className="aboutus-img" />
                </div>
                <div className="aboutus-text">
                    <div>
                        <article className="aboutus-article">Ideyanızı Canlandırmağın Ən <span className="article-txt1">Sürətli</span>  və <span className="article-txt2">Keyfiyyətli</span> Yolu.</article>
                    </div>
                    <div>
                        <p className="aboutus-txt">Biz SolutionX olaraq möhtəşəm vebsaytlar və mobil proqramlar yaratmaqla Startaplara öz ideyalarını sürətlə həyata keçirtməyə kömək edirik. Komandamızda yer alan hər bir üzv öz işini sevərək və peşakar səviyyədə yerinə yetirir. Bunun üçün işimizin sürətli və keyfiyyətli olmasına əminik. Biz hər bir Startapın ehtiyaclarına uyğun fərdiləşdirilmiş həllər yaradırıq və onları uğura aparan bütün rəqəmsal yollarda dəstəkləmək üçün buradayıq.</p>
                    </div>
                    <div className="aboutus-btn-box">
                        <button className="aboutus-btn"><a href="https://api.whatsapp.com/send?phone=+9940103282119&text=Hello,%20I%20am%20interested%20in%20your%20product." target="_blank" className="aboutus-btn-link">İDEYANI CANLANDIR</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;