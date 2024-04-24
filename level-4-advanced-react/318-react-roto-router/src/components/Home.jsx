import React, { useState } from 'react';

function Home() {
    return (
        <div className='main home'>
            <h1>Welcome to ABC Plumbing!</h1>
            <img src="https://cdn.pixabay.com/photo/2017/11/03/19/52/faucet-2915462_1280.png" className='image' />
            <h2>Why Choose Us</h2>
            <ul>
                <li>Expertise You Can Trust: Our team of skilled plumbers brings a wealth of knowledge and expertise to every project. From leak repairs to complete bathroom remodels, we've got the skills to handle it all with precision and care.</li>
                <li>Reliable and Timely Service: We understand the urgency of plumbing issues. That's why we prioritize prompt and reliable service. When you choose [Your Company Name], you can trust that your plumbing needs will be addressed swiftly and effectively.</li>
                <li>Customer Satisfaction Guaranteed: Our commitment to your satisfaction is unwavering. We take pride in our work, ensuring that every project is completed to the highest standards. Your happiness is our priority.</li>
            </ul>
        </div>
    );
}

export default Home;