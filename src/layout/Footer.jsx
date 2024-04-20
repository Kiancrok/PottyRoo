// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full h-50 p-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Additional Information</h3>
           <p>Extra details can go here.</p>
          
            
          </div>
          <div>
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul>
            <p className='nigel'>PottyRoo's {' '}
                    <a href="https://www.instagram.com/pottyroo_pyop/" style={{ textDecoration: 'underline', color: 'white' }}>Instagram</a> {' '}
                    <a href="https://www.instagram.com/pottyroo_pyop/">
                        <img className='insta' src='/insta.jpg' alt=''/>
                    </a>
                </p>
                <p className='nigel'>PottyRoo's {' '}
                    <a href="https://www.facebook.com/Pottyroo" style={{ textDecoration: 'underline', color: 'white' }}>Facebook</a> {' '}
                    <a href="https://www.facebook.com/Pottyroo">
                        <img className='face' src='/face.jpg' alt=''/>
                    </a>
                </p>
                <p className='nigel'>Roo's Crafy Cave's {' '}
                    <a href="https://www.facebook.com/rooscraftycave" style={{ textDecoration: 'underline', color: 'white' }}>Facebook</a> {' '}
                    <a href="https://www.facebook.com/rooscraftycave">
                        <img className='face' src='/face.jpg' alt=''/>
                    </a>
                </p>
             
                <li> <Link to="/Contact" style={{ textDecoration: 'underline', color: "white" }}
    onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
<li>
    <a href="/contact#mapp" style={{ textDecoration: 'underline', color: "white" }}>Find Us</a>
</li>





              <li><Link to="/Terms" className=""style={{ textDecoration: 'underline',  color: "white" }}
               onClick={() => window.scrollTo(0, 0)}>Terms And Conditions</Link></li>
            
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
