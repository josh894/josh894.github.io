import React from 'react';
import './styles/index.css'
import './styles/app.css'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <body>
    <Container className = 'body-container'>

            <div className="full-width">
                <h2 className = 'title-text'>Joshua Davidson</h2>
                <div className = 'link' >
                  <a href="https://github.com/josh894" target="_blank" rel="noopener noreferrer">
                    <img className = 'photo-link' alt='thumbnail' src='/assets/Git.png'></img>
                  </a>
                  <a href="https://www.linkedin.com/in/joshua-davidson-55236820b/" target="_blank" rel="noopener noreferrer">
                    <img className = 'photo-link' alt='thumbnail' src='/assets/LinkedIn.webp'></img>
                  </a>
                </div>
            </div>
          
      <section className = 'body-text'>
        
        <div className="photo-container">
          <img className = 'photo' alt='Joshua Davidson' src='/assets/Headshot.jpg'></img>
        </div>
          <p className="photo-sentence">Hi! I am Joshua Davidson, a Toronto-based software developer looking to further expand my knowledge and skill-sets in the industry. I strive
                                        to learn from others and am always searching for a bigger challenge to face. <br></br><br></br> 

                                        My current proficiencies are within the world of Data Science using Python and C, but I am willing and eager to learn
                                        about other sectors and languages within the software developing industry. Check out my <b>resume</b> for more info! <br></br><br></br> 

                                        When I'm not working on personal projects, you can find me coordinating with my guild in intense and strategic mythic raiding in World of Warcraft.
                                        </p>
        
      </section>

      <section id="portfolio-container">
        <div className="full-width">
          <h2 className = 'title-text'>Career</h2>
        </div>

        <div className="career-item">

            <img className = 'photo-thumb' alt='thumbnail' src='/assets/GBADsLogoRedesign.png'></img>
            <div className = 'item-text'>
              <p className="career-title">Software Developer @ GBADs (2022-2024)</p>
              <p className="career-description">• Created a Full-Stack <a href='https://gbadske.org/dashboards/visualizer/' target="_blank" rel="noopener noreferrer">Plotly dashboard</a> to provide additional context for large population datasets.</p> 
              <p className="career-description"> • Expanded Python literacy and knowledge on algorithms/dataframes in order to properly display users large datasets in a timely manner.</p> 
              <p className="career-description"> • Work directly contributed to reporting faulty data to the United Nations to be changed for future researchers
                                                to work with accurate population data.</p> 
            </div>
        </div>

      </section>

      <section id="portfolio-container">
        <div className="full-width">
          <h2 className = 'title-text'>Personal Projects</h2>
        </div>

        
        <div className="portfolio-item">

            <img className = 'photo-thumb' alt='thumbnail' src='/assets/SimpleArmory.jpg'></img>
            <div className = 'item-text'>
              <p className="item-title">Simple Armory</p>
              <p className="item-description">• Consistent contributor to Kevin Clement's <a href='https://simplearmory.com/#/us/kelthuzad/asmongold/collectable/mounts' target="_blank" rel="noopener noreferrer">open source website</a>.</p> 
              <p className="item-description">• Up-kept json files that held information on hundreds of items updated monthly and refactored archaic json structures.</p> 
            </div>
        </div>

        <div className="portfolio-item">
          <img className="photo-thumb" alt="thumbnail" src="/assets/MountTrack.png" />
          <div className="item-text">
            <p className="item-title">MountTrack</p>
            <p className="item-description">• Created an add-on for World of Warcraft allowing users the ability to track in-game collectables.</p>
            <p className="item-description">• Gained 2000 unique downloads utilizing Blizzard's Lua-based API to scrape for all obtainable items.</p>                         
          </div>
        </div>
      </section>

      
    </Container>
    </body>
  );
}

export default App;

