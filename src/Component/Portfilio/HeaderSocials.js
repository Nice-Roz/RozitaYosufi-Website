import React from "react";
import './Portfilio.css';
import {CiLinkedin} from "react-icons/ci";
import {LiaGithubSquare} from "react-icons/lia";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderSocials=()=>{
    return(
      <div className="home__socials">
        <a href='https://github.com/Nice-Roz'><LiaGithubSquare className='home__social-link'/></a>
       <a href='https://www.linkedin.com/in/rozita-yosufi-94a197281'><CiLinkedin className='home__social-link'/></a>
       <a href='https://twitter.com/Nice_R0Z?s=35'><FaSquareXTwitter className='home__social-link'/></a>
      </div>
    )
}
export default HeaderSocials;