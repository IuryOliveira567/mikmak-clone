import React, { useEffect, useState, useRef } from 'react';

import ExperiencesHomePage from '../assets/videos/ExperiencesHomepage_2.mp4';

function AppPreview() {
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
      const hiddenEl = document.getElementsByClassName('show-on-scroll')[1] as HTMLElement;
      hiddenEl.style.display = "flex"
    }

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div ref={ ref } className="app-preview">
      <div className="show-on-scroll row">
        <div className="preview-discription col-md-6 d-flex flex-column align-items-center justify-content-evenly">
          <h3>Accelerate Sales and Market Share</h3>
          <ul>
            <div>
              <li>Make your product discoverable</li>
              <p>Across all media and brand websites, shoppers<br />
                worldwide will find and buy your products faster, in-store<br />
                and online
              </p>
            </div>
            <div>
              <li>Beat the compatition</li>
              <p>Know, compare, and optimize your performance against<br />
                brands in your category by channel, retailer, and more
              </p>
            </div>
            <div>
              <li>Strengthen retailer partnerships</li>
              <p>
                Use proprietary, retailer-specific consumer insights in<br />
                joint planning discussions to unlock shelf space and<br />
                media value
              </p>
            </div>
          </ul>
        </div>
        <div className="video-preview col-md-6">
          <video width={500} height={500} autoPlay={true} muted>
            <source src={ExperiencesHomePage} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  )
}

export default AppPreview;