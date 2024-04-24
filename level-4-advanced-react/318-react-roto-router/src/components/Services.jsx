import React, { useState } from 'react';

function Services() {
    return (  
        <div className='main services'>
            <h1> Services & Testimonials</h1>
            <div>
                <img src= "https://cdn.pixabay.com/photo/2017/11/03/19/52/faucet-2915462_1280.png" className='image'/>
                <ul>
                    <h2>Services Offered</h2>
                    <li>Leak Detection and Repair: Swift detection and repair of leaks to prevent water damage and conserve resources. </li>
                    <li>Pipe Installation and Repair: Professional installation and repair of pipes to ensure efficient water distribution throughout your property. </li>
                    <li>Drain Cleaning and Unclogging: Effective removal of blockages and buildup in drains to restore proper drainage and prevent backups. </li>
                    <li>Water Heater Installation and Maintenance: Expert installation and maintenance services for water heaters to ensure reliable hot water supply. </li>
                    <li>Fixture Installation and Repair: Installation and repair of faucets, sinks, toilets, and other fixtures to enhance functionality and aesthetics. </li>
                    <li>Sump Pump Services: Installation and maintenance of sump pumps to prevent basement flooding and protect your property from water damage. </li>
                    <li>Bathroom and Kitchen Remodeling: Professional remodeling services to transform your bathroom or kitchen into a functional and stylish space.</li>
                </ul>
          
            <ul>
                <h2>Reviews</h2> 
                <li>"Quick Response and Quality Service!" </li>
                <li>"Reliable and Professional Plumbers!"</li>
                <li>"Exceptional Drain Cleaning Service!"</li>
                <li>"Highly Skilled and Friendly Team!"</li>
                </ul>
            </div>          
        </div>
    );
}

export default Services
