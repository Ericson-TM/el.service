import { useState, useRef, useEffect, useCallback } from 'react';
import Container from '../../common/Container/Container';
import Section from '../../common/Section/Section';
import { services } from '../../../data/services';
import styles from './Services.module.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const scrollToIndex = useCallback((index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0]?.offsetWidth || 0;
      const gap = 32;
      sliderRef.current.scrollTo({
        left: index * (slideWidth + gap),
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    const nextIndex = (activeIndex + 1) % services.length;
    scrollToIndex(nextIndex);
  }, [activeIndex, scrollToIndex]);

  const prevSlide = useCallback(() => {
    const prevIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  }, [activeIndex, scrollToIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  const handleScroll = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0]?.offsetWidth || 0;
      const gap = 32;
      const scrollLeft = sliderRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / (slideWidth + gap));
      setActiveIndex(Math.min(Math.max(newIndex, 0), services.length - 1));
    }
  };

  return (
    <Section id="services" variant="default">
      <Container>
        <div className={styles.servicesContent}>
          <div className={styles.servicesHeader}>
            <h2 className={styles.sectionTitle}>Meine Dienstleistungen</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              Umfassende Business Computing Lösungen, maßgeschneidert für kleine und mittelständische Unternehmen
            </p>
          </div>

          <div
            className={styles.sliderContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              className={`${styles.navArrow} ${styles.navArrowLeft}`}
              onClick={prevSlide}
              aria-label="Previous service"
            >
              ‹
            </button>
            <button
              className={`${styles.navArrow} ${styles.navArrowRight}`}
              onClick={nextSlide}
              aria-label="Next service"
            >
              ›
            </button>

            <div
              className={styles.servicesSlider}
              ref={sliderRef}
              onScroll={handleScroll}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`${styles.serviceSlide} ${activeIndex === index ? styles.activeSlide : ''}`}
                >
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIconWrapper}>
                      <span className={styles.serviceIcon}>{service.icon}</span>
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className={styles.sliderControls}>
              <div className={styles.sliderDots}>
                {services.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Go to service ${index + 1}`}
                  >
                    {activeIndex === index && (
                      <span
                        className={styles.dotProgress}
                        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <span className={styles.slideCounter}>
                {activeIndex + 1} / {services.length}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
