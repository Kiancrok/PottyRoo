import React from 'react';
import MapComponent from './MapComponent'; // Import the MapComponent

function Contact() {
    return (
        
        <div>
            
            <div id="section2">
                <h2>Section 2</h2>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                {/* Add more content to Section 2 as needed */}
            </div>
            <div id="section3">
                <h2>Section 2</h2>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                {/* Add more content to Section 2 as needed */}
            </div>
            <div id="mapp">
    <h2>Where To Find Us</h2>
    {/* Replace the content of Section 1 with the MapComponent */}
    <MapComponent />
</div>

            <div id="section4">
                <h2>Section 2</h2>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                <p>This is the second section.</p><p>This is the second section.</p>
                {/* Add more content to Section 2 as needed */}
            </div>
            {/* Add more sections as needed */}
        </div>
    );
}

export default Contact;
