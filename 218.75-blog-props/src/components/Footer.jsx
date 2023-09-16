import React from "react";

export default function Footer() {
   return (
    <footer>
       <button className='button'>OLDER POSTS →</button>
       <ul className="social--media">
        <li><img src="./images/social.jpg" className="social--pic"/></li>
       </ul>
    <p className="copyright">Copyright © Your Website 2023</p>
    </footer>
   ) 
}
