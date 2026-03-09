import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

function Footer() {
  return (
    <div className="footer p-8 max-w-7xl mx-auto">
      <div className="footer-icons flex gap-5 m-10">
        <img src={facebook_icon} alt="" className="h-8 w-8 cursor-pointer" />
        <img src={instagram_icon} alt="" className="h-8 w-8 cursor-pointer" />
        <img src={twitter_icon} alt="" className="h-8 w-8 cursor-pointer" />
        <img src={youtube_icon} alt="" className="h-8 w-8 cursor-pointer" />
      </div>
      <ul className="grid grid-cols-4 gap-4 mb-8">
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Invester realtions</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text text-sm text-gray-400">
        1997-2023 Netflix, Inc.
      </p>
    </div>
  );
}

export default Footer;
