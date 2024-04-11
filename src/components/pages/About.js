import React from 'react';
import '../../App.css';
import './About.css';
import pfp from '../../images/Profile_Photos/TM_2_color.PNG';

export default function Products() {
    return (
        <>
            <h1 className="about">About</h1>
            <img src={pfp} alt="tony-pfp" className="profile-photo-1"></img>
            <p className="about-paragraph">
                Anthony J. Mauro is an artist and architect who resides at the Jersey Shore and West Palm Beach. "Tony" draws his inspiration from his love of nature and the built environment.
                </p>
        </>
    );
}