import React from 'react';
import logo from './images/logo.svg'
import illustrationWorking from './images/illustration-working.svg'
import brandRecognition from './images/icon-brand-recognition.svg'
import './App.css';
import {IoMenu} from 'react-icons/io5'

function App() {
  return (
    <>
    <nav style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <img src={logo} alt="Shortly" />
      <div style={{width: '5rem', height: '5rem', display: 'inline-block'}}>
        <div style={{width: '100%', height: '1rem', backgroundColor: 'black'}}></div>
        <div style={{width: '100%', height: '1rem', backgroundColor: 'black', marginTop: '1rem', marginBottom: '1rem'}}></div>
        <div style={{width: '100%', height: '1rem', backgroundColor: 'black'}}></div>
      </div>
    </nav>
    <section>
      <img src={illustrationWorking} alt="Working" />
      <div>
        <h1>
          More than just shorter links
        </h1>
        <p>
        Build your brand’s recognition and get detailed insights 
        on how your links are performing.
        </p>
        <button>
          Get Started
        </button>
      </div>
    </section>
    <section>
      <form>
        <input type="text" placeholder="Shorten a link here..." />
        <button type="submit">
          Shorten it!
        </button>
      </form>
      <div>
        <p>
          https://www.frontendmentor.io
        </p>
        <span>

        </span>
        <p>
          https://rel.link/k4IKyk
        </p>
        <button>
          Copy
        </button>
      </div>
      <div>
        <p>
          https://www.frontendmentor.io
        </p>
        <span>

        </span>
        <p>
          https://rel.link/k4IKyk
        </p>
        <button>
          Copied!
        </button>
      </div>      
    </section>
    <section>
      <h2>
        Advanced Statistics
      </h2>
      <p>
      Track how your links are performing across the web with our 
      advanced statistics dashboard.
      </p>
      <div>
        <div>
          <div style={{backgroundColor: 'black'}}>
            <img src={brandRecognition} alt="Brand Recognition" />
          </div>
          <h3>
              Brand Recognition
            </h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t 
              mean a thing. Branded links help instil confidence in your content.
            </p>
        </div>
        <div>
          <div style={{backgroundColor: 'black'}}>
            <img src={brandRecognition} alt="Brand Recognition" />
          </div>
            <h3>
              Detailed Records
            </h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions.
            </p>
        </div>
        <div>
          <div style={{backgroundColor: 'black'}}>
            <img src={brandRecognition} alt="Brand Recognition" />
          </div>
            <h3>
              Fully Customizable
            </h3>
            <p>
              Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement.
            </p>
        </div>               
      </div>
      <span>
      </span>       
    </section>
    <section>
      <h4>
        Boost your links today
      </h4>
      <button>
        Get Started
      </button>
    </section>
    <section>
      <img src={logo} alt="Shortly Logo" />
      <ul>
        <li>
          Features
        </li>
        <li>
          Link Shortening
        </li>
        <li>
          Branded Links
        </li>
        <li>
          Analytics
        </li>
      </ul>
      <ul>
        <li>
          Resources
        </li>
        <li>
          Blog
        </li>
        <li>
          Developers
        </li>
        <li>
          Support
        </li>
      </ul>
      <ul>
        <li>
          Company
        </li>
        <li>
          About
        </li>
        <li>
          Our Team
        </li>
        <li>
          Careers
        </li>
        <li>
          Contact
        </li>
      </ul>
      <ul>
        <li>
          <a>
            Facebook
          </a>
        </li>
        <li>
          <a>
            Twitter
          </a>
        </li>
        <li>
          <a>
            Pinterest
          </a>
        </li>
        <li>
          <a>
            Instagram
          </a>
        </li>                        
      </ul>     
    </section>
    </>
  );
}

export default App;
