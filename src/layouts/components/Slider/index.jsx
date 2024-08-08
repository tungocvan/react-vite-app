import React, { useEffect, useRef, useState } from 'react';
import "./slider.scss";

export default function Slider({ sliderImages }) {
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const dotsRef = useRef([]);

  const [active, setActive] = useState(0);
  const lengthItems = sliderImages.length - 1;

  useEffect(() => {
    const slider = sliderRef.current;
    const items = itemsRef.current;
    const next = nextRef.current;
    const prev = prevRef.current;
    const dots = dotsRef.current;

    const reloadSlider = () => {
      slider.style.left = -items[active].offsetLeft + 'px';
      let lastActiveDot = document.querySelector('.slider .dots li.active');
      if (lastActiveDot) {
        lastActiveDot.classList.remove('active');
      }
      dots[active].classList.add('active');
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => next.click(), 3000);
    };

    next.onclick = function () {
      setActive((prevActive) => (prevActive + 1 <= lengthItems ? prevActive + 1 : 0));
    };

    prev.onclick = function () {
      setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : lengthItems));
    };

    dots.forEach((li, key) => {
      li.addEventListener('click', () => {
        setActive(key);
      });
    });

    window.onresize = function () {
      reloadSlider();
    };

    let refreshInterval = setInterval(() => next.click(), 3000);
    reloadSlider();

    return () => {
      clearInterval(refreshInterval);
      window.onresize = null;
    };
  }, [active, lengthItems]);

  useEffect(() => {
    const slider = sliderRef.current;
    const items = itemsRef.current;
    const dots = dotsRef.current;

    const reloadSlider = () => {
      slider.style.left = -items[active].offsetLeft + 'px';
      let lastActiveDot = document.querySelector('.slider .dots li.active');
      if (lastActiveDot) {
        lastActiveDot.classList.remove('active');
      }
      dots[active].classList.add('active');
    };

    reloadSlider();
  }, [active]);

  return (
    <div className="slider">
      <div className="list" ref={sliderRef}>
        {sliderImages.map((image, index) => (
          <div className="item" key={index} ref={(el) => (itemsRef.current[index] = el)}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="prev" ref={prevRef}>{"<"}</button>
        <button className="next" ref={nextRef}>{">"}</button>
      </div>
      <ul className="dots">
        {sliderImages.map((_, index) => (
          <li
            key={index}
            className={index === 0 ? "active" : ""}
            ref={(el) => (dotsRef.current[index] = el)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
