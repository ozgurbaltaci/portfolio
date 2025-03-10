import React from 'react'
import './Socials.css'
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";

const Socials = () => {
    return (
        <div className='socials'>
            <CiLinkedin />
            <VscGithub />
            <CiMail />

        </div>
    )
}

export default Socials