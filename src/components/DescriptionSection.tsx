import React, { useEffect, useState, useRef } from 'react';
import DriveProfitImg from '../assets/images/DriveProfitability.webp';

function DescriptionSection() {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    
    if(isIntersecting) {
      const hiddenEl = document.getElementsByClassName('show-on-scroll')[2] as HTMLElement;
      hiddenEl.style.display = "flex"
    }

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div ref={ ref }>
      <div className="show-on-scroll row">
        <div className="profitability-preview col-md-6">
          <img src={DriveProfitImg} width={500} height={350} />
        </div>
        <div className="profitability-desc col-md-6">
          <h3>Drive Profitability and Reduce Costs</h3>
          <ul>
            <div>
              <li>Improve marketing effectiveness</li>
              <p>Understand and spend on the online and offline<br />
                channels, campaigns, creative, and audiences that<br />
                actually convert
              </p>
            </div>
            <div>
              <li>Collect first-party data</li>
              <p>Own and have a consolidated view of your consumer<br />
                data and audiences to improve performance and lower<br />
                costs
              </p>
            </div>
            <div>
              <li>Save time and money</li>
              <p>
                One easy-to-use global platform automatically enables<br />
                consistent reporting and fast decision-making across the<br />
                entire organization
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DescriptionSection;