import React, { useEffect } from 'react';
import './stylesecondscreen.css'; 

const SecondScreenComponent = () => {
  useEffect(() => {
    const flexSlides = document.querySelectorAll('.flex-slide');

    flexSlides.forEach((slide) => {
      slide.addEventListener('mouseenter', () => {
        const title = slide.querySelector('.flex-title');
        const about = slide.querySelector('.flex-about, .flex-about-home');

        if (title) {
          title.style.transform = 'rotate(0deg)';
          title.style.top = '10%';
        }

        if (about) {
          about.style.opacity = '1';
        }
      });

      slide.addEventListener('mouseleave', () => {
        const title = slide.querySelector('.flex-title');
        const about = slide.querySelector('.flex-about, .flex-about-home');

        if (title) {
          title.style.transform = 'rotate(90deg)';
          title.style.top = '15%';
        }

        if (about) {
          about.style.opacity = '0';
        }
      });
    });

    return () => {
      flexSlides.forEach((slide) => {
        slide.removeEventListener('mouseenter', () => {});
        slide.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="flex-container">
      <div className="flex-slide home">
        <div className="flex-title">about</div>
        <div className="flex-about-home">
          <p>a quick collection of my backstory.</p>
        </div>
      </div>
      <div className="flex-slide about">
        <div className="flex-title">services</div>
        <div className="flex-about">
          <p>Offering my services so I can afford car parts.</p>
        </div>
      </div>
      <div className="flex-slide work">
        <div className="flex-title"> exp</div>
        <div className="flex-about">
          <ul>
            <li>Web Developement</li>
            <li>Software Developement</li>
            <li>Mobile Developement</li>
          </ul>
        </div>
      </div>
      <div className="flex-slide contact">
        <div className="flex-title">Contact</div>
        <div className="flex-about">
          <p>Use the contact form below</p>
          <form className="contact-form">
            <p>Email <input type="text" name="email" /></p>
            <p>Comment <textarea name="comment" rows="5"></textarea></p>
            <p><input type="submit" value="Send Message" /></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondScreenComponent;
