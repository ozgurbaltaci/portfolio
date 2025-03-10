import React from 'react'
import './Socials.css'
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Socials = () => {
    return (
        <div className='socials'>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CiLocationOn />
                <p>Barcelona,Spain</p>
            </div>
            <div style={{ borderLeft: "1px solid var(--secondaryText)", height: "20px" }}></div>

            <a href={process.env.REACT_APP_LINKEDIN} target="_blank" className='social_icon'><CiLinkedin /></a>
            <a href={process.env.REACT_APP_GITHUB} target="_blank" className='social_icon'>

                <VscGithub />
            </a>
            <a href={`mailto:${process.env.REACT_APP_MAIL}`} className='social_icon'>

                <CiMail />
            </a>
            <a href={`tel:${process.env.REACT_APP_PHONE}`} className='social_icon'>
                <CiPhone />

            </a>


        </div>
    )
}

export default Socials