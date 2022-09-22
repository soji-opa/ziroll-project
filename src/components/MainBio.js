import React from "react";
import laura from '../images/laura.png'
import mail from '../images/Mail.png'
import Linkedin from '../images/linkedin.png'

export default function MainBio(){
    return(
        <div className="main--title">
            <header>
                <img src={laura} 
                alt="devimg" 
                className='nav--img'/>
            </header>

            <section className="main--bio">
                <h1>Laura Smith</h1>
                <h6>Frontend Developer</h6>
                <p>laurasmith.website</p>
            </section>

            <div className="sm--tags">
                <button className="button">
                        <img src={mail} 
                        alt="mail img"
                        className="btn--img"/>
                        Email
                    </button>

                    <button className="button btn--styleII">
                        <img src={Linkedin} 
                        alt="linkedin img"
                        className="btn--img"/>
                        Linkedin
                    </button>
            </div>
        </div>
    )
}