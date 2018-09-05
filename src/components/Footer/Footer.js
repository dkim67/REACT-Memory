import React from 'react';
import './Footer.css'



function Footer(props) {
  return (
    <footer className="pagefooter">
      <div className="container">
        <div className="row">
          <h5 className="center white-text footer-update">{props.text}</h5>
        </div>
      </div>
      <div className="footercopyright">
        <div className="container center">
       
        </div>
      </div>
    </footer>
  )
}




export default Footer;