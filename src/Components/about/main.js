import React from "react";
import vapor from './../../images/vapor_profile.png'

function Main(){

    return(
        <main class="about">
            <br />
            <h2>
                My name is Jonny Five and I'm a professional geek.
            </h2>
            <br />
            <h5>Okay so, my actual title is Freelance Toy Photographer</h5>
            <br />
            <img src={vapor} id="vapor_about" alt="mezco's vapor you off"></img>
            <br />
			<p>
                But action figures are practically my religion. I've been a Star Wars and Star Trek fan practically since birth, 
                and I began collecting toys and action figures at a young age like many others in the community. </p>
			<p>
                I've always enjoyed taking pictures; so action figure photography seemed like a natural next step for me. 
                I started posting photos to just show case my collection; however, my imagination took off, and I began creating
                my own crossover shots; telling my own stories. 
            </p>
            <p>
                Dioramas and 3d printing have just been the natural next step for me to increase the level of detail in 
                the stories that I tell. I'm always welcome to idea suggestions for what to print next, so use the form below
                if you have an idea that you'd like to see in PLA. If you'd like a custom piece, please visit my <a href="commission">commissions page</a>.
            </p>

            <p> [ insert a form here ] </p>
        </main>
    )

}

export default Main;