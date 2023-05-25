import {useState } from "react";
import img02 from "./Images/FaceBook_Portfolio_Photo-removebg-preview.png"

function OurTeam () {



    return (
        <div className="ourteam-section" id="ourteam">
            <div className="ourteam-container">
                <div className="member-box">
                    <div className="member-content" >
                        <div className="content-container">
                            <h1 className="member-header">Xan Safarov - CEO/Web Developer</h1>
                            <p className="member-text">Xan ən son proqramlaşdırma dilləri və veb development framework-ni dərindən bilən yüksək ixtisaslı və təcrübəli veb developer-dir. SolutionX şirkətinin baş direktoru kimi o, müştərilərə qabaqcıl veb həlləri təqdim etməkdə  peşəkar olan komandasına rəhbərlik edir.</p>
                        </div>
                    </div>
                    <div className="member-image-box ">
                        <img src={img02} alt="member profile picture" className="member-img"  />
                    </div>
                </div>
                <div className="member-box">
                    <div className="member-image-box ">
                        <img src={img02} alt="member profile picture" className="member-img " />
                    </div>
                    <div className="member-content">
                        <div className="content-container ">
                            <h1 className="member-header">Xan Safarov - CEO/Web Developer</h1>
                            <p className="member-text">Xan ən son proqramlaşdırma dilləri və veb development framework-ni dərindən bilən yüksək ixtisaslı və təcrübəli veb developer-dir. SolutionX şirkətinin baş direktoru kimi o, müştərilərə qabaqcıl veb həlləri təqdim etməkdə  peşəkar olan komandasına rəhbərlik edir.</p>
                        </div>
                    </div>
                </div>
                <div className="member-box">
                    <div className="member-content">
                        <div className="content-container">
                            <h1 className="member-header">Xan Safarov - CEO/Web Developer</h1>
                            <p className="member-text">Xan ən son proqramlaşdırma dilləri və veb development framework-ni dərindən bilən yüksək ixtisaslı və təcrübəli veb developer-dir. SolutionX şirkətinin baş direktoru kimi o, müştərilərə qabaqcıl veb həlləri təqdim etməkdə  peşəkar olan komandasına rəhbərlik edir.</p>
                        </div>
                    </div>
                    <div className="member-image-box ">
                        <img src={img02} alt="member profile picture" className="member-img " />
                    </div>
                </div>
                <div className="member-box">
                    <div className="member-image-box ">
                        <img src={img02} alt="member profile picture" className="member-img " />
                    </div>
                    <div className="member-content">
                        <div className="content-container ">
                            <h1 className="member-header">Xan Safarov - CEO/Web Developer</h1>
                            <p className="member-text">Xan ən son proqramlaşdırma dilləri və veb development framework-ni dərindən bilən yüksək ixtisaslı və təcrübəli veb developer-dir. SolutionX şirkətinin baş direktoru kimi o, müştərilərə qabaqcıl veb həlləri təqdim etməkdə  peşəkar olan komandasına rəhbərlik edir.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurTeam;