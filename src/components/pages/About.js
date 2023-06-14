import React from 'react';
import avatar from '../../assets/images/Avatar.jpg';

export default function About() {
    return (
        <main class="d-flex">
            <img src={avatar} className="img-thumbnail" id='devPicture' alt="A placeholder image of a person's silhouette."></img>
            <p>
                I am a former student of physics and mathematics turned professional artist turned budding web developer. Through it all, I have been passionate about applying the precision of math and logic to the artful creation of beautiful objects and places (both real and virtual). I received instruction at top-ranking educational institutions and utilized the skills that I cultivated there to aid renowned artists and scientists alike in the execution of their visions. I am always excited to try new experiences, learn new skills, and boldly go where none have gone before.
            </p>
        </main>
    )
}
