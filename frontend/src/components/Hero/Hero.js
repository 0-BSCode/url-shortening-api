import React from 'react'
import illustrationWorking from '../../images/illustration-working.svg'


const Hero = () => {
  return (
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
  )
}

export default Hero