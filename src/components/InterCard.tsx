import '../styles/App.scss';
import { useState, useRef, useEffect } from 'react';

function InterCard() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);

    if(isIntersecting) {
      const hiddenEl = document.getElementsByClassName('show-on-scroll')[0] as HTMLElement;
      hiddenEl.style.display = "flex"
    }

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div ref={ ref } className="inter-card">
      <div className="show-on-scroll row">
        <div className="col-md-6 video-pres">
          <iframe className="video-fade-effect" src="https://www.youtube.com/embed/GrFG4Vopu5s?si=RaSDWVmwo_6UdxDE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="col-md-6 mikmak-pres">
          <h1 className="slide-fade-effect">Why MikMak</h1>
          <p className="slide-fade-effect">
            We grow brands commerce-first, globally. Spanning 100<br/>
            countries and 7000 Media & Retailer Partners Worldwide. Our<br/>
            brand, retailer, and consumer insights will guide and impact<br/>
            decision-making across your entire organization to drive real<br/>
            business results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterCard;