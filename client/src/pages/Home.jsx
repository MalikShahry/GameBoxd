import React from 'react';
import '../styles/Home.css'
import backgroundImage from '../assets/nightreign.webp'

function Home() {


    return(

        <div>

            <div class='BackDrop'>
                
                <img src={backgroundImage} alt='background'/>

            </div>

            <div className='HomeHeader'>
                    <h2>
                    Track games you've played.
                    <br/>
                    Add games to your backlog.
                    <br/>
                    Show the world your favourite games.
                    </h2>              
            </div>

            <section class='Featured'>


            </section>

        </div>

    );

}

export default Home;