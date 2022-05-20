import React from 'react'
import brandRecognition from '../../images/icon-brand-recognition.svg'
import detailedRecords from '../../images/icon-detailed-records.svg'
import fullyCustomizable from '../../images/icon-fully-customizable.svg'
import Statistic from './Statistic/Statistic'
import styles from './Statistics.module.css'

const Statistics = () => {
  return (
    <section className={styles.stats}>
      <h2 className={styles.stats__title}>
        Advanced Statistics
      </h2>
      <p className={styles.stats__subtitle}>
        Track how your links are performing across the web with our 
        advanced statistics dashboard.
      </p>
      <div className={styles.stats__statContainer}>
        <Statistic 
          logo={brandRecognition}
          title="Brand Recognition"
          subtitle="Boost your brand recognition with each click. Generic links don’t 
          mean a thing. Branded links help instil confidence in your content." />
          <Statistic 
          logo={detailedRecords}
          title="Detailed Records"
          subtitle="Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions." />
          <Statistic 
          logo={fullyCustomizable}
          title="Fully Customizable"
          subtitle="Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement." />
          <span className={styles.stats__vertical} />
      </div>
    </section>
  )
}

export default Statistics