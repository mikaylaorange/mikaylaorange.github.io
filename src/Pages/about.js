import React from "react";

import "./about.css";

export default function About() {
  let paragraph1 = `I first found CS through my NSBE Jr. chapter and have been on this wild 
    journey evers since! Through these past few years of coffee runs, late night exam antics with friends, 
    and traveling all across the country, I found a love for a field that gave me a blend of creative freedom 
    and logical exercise. Now that I’m approaching the end of my college career (for now?) and had experiences 
    that’ll last me a lifetime, I find myself more equipped  to give some of what I learned to others 
    (afterall, tech is something that everyone should reap the benefits of). From teaching and tutoring to 
    talking with young black girls in my community, I know my role in the tech field is bigger than myself, 
    and through my accomplishments, I hope the next generation of
    engineers can find inspiration in my work!`;
  let paragraph3 = `I am more than just my work, however. I self-study Korean, watch Jeopardy! with my dad and sister
    (the record we hold right now is 45 questions out of 61), and as of recently, make endless Hamilton references. 
    And, of course, I can’t explain my non-CS loves without mentioning Korean pop sensation BTS and Beyoncé. 
    Nowadays you can catch me watching All Def and John Mulaney for my laughs or listening to The Read 
    (which you should definitely listen to).`;
  return (
    <div className="about-component">
      <h3 id="about" className="quote">
        "Where there is love and inspiration, I don't think you can go wrong."
      </h3>
      <h4 className="speaker">-Ella Fitzgerald</h4>
      <div className="first-container">
        <p className="first-paragraph"> {paragraph1}</p>
        <div className="second-container">
        <img
          className="me-image"
          src={require("../images/me.jpeg")}
          alt="me @ google"
        />
        </div>
      </div>
      <div>
      <img
          className="friends-image"
          src={require("../images/mgj.jpeg")}
          alt="cherry blossom friends :)"
        />
        <p  className="second-paragraph">{paragraph3}</p>
      </div>
    </div>
  );
}
