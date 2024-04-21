import React from 'react';
import MapComponent from './MapComponent'; // Import the MapComponent
import "../styles/contact.css"
function Contact() {
    return (
        
        <div>
        <div id="section2">
          <h1>How To Contcact Us</h1>
          <div class="feature-cards-container">
            <div class="feature-card">
              <h4 class="feature-title">Phone Number</h4> 
              <div class="contact"><p>01524 874647</p></div>
              <p class="feature-desc">Extra words describing number hhhhh hhhhh hhh hh  hhhhhh h hh hhhhhh </p>
            </div> 
            <div class="feature-card">
              <h4 class="feature-title">WhatsApp</h4> 
              <div class="contact"><p>07503 231854</p></div>
              <p class="feature-desc">Extra words describing number</p>
            </div> 
          </div>
        </div>
      <h2>Where To Find Us</h2>
        <div class="feature-card2">
              <h4 class="feature-title">Address</h4> 
              <div class="contact"><p>295 Marine Road Central <br/>Morecambe LA45BY</p></div>
              <p class="feature-desc">Extra words describing address</p>
            </div> 

            <div id="mapp">
    
    {/* Replace the content of Section 1 with the MapComponent */}
    <MapComponent />
</div>

            <div id="section4">
                <h2>Section 2</h2>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p>
                {/* Add more content to Section 2 as needed */}
            </div>
            {/* Add more sections as needed */}
        </div>
    );
}

export default Contact;
