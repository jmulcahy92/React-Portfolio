import React from 'react';
import avatar from '../../assets/images/placeholderAvatar.png';

export default function About() {
    return (
        <main class="d-flex">
            <img src={avatar} className="img-thumbnail" id='devPicture' alt="A placeholder image of a person's silhouette."></img>
            <p>
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
        </main>
    )
}
