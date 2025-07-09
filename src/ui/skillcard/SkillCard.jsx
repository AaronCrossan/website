import { useEffect, useRef, useState } from "react";
import styles from "./SkillCard.module.css";

function SkillCard({ name, description, color, icon }) {
  const [hover, setHover] = useState(false);
  const [onScreen, setOnScreen] = useState(false);

  function handleMouseOver(e) {
    e.preventDefault();
    setHover(true);
  }

  function handleMouseLeave(e) {
    e.preventDefault();
    setHover(false);
  }

  const containerRef = useRef(null);

  const options = { root: null, rootMargin: "0px", threshold: 1.0 };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) setOnScreen(true);
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div
      className={`${onScreen === true ? "fadeUpAnim" : ""} ${styles.skillcard}`}
      id={name}
      ref={containerRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={
        hover === false
          ? { border: `solid 3px ${color}`, transition: "all .3s" }
          : {
              border: `solid 3px ${color}`,
              boxShadow: `inset 250px 0 0 0 ${color}`,
              transition: "all .3s",
            }
      }
    >
      <h2>{name}</h2>
      {hover === true ? <p>{description}</p> : <img src={icon} alt={name} />}
    </div>
  );
}

export default SkillCard;
