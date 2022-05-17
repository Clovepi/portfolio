import React from "react";
import profilePicture from "../../../static/assets/images/auth/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Hi, my name is Cassandra Pichardo. I'm 20 years old and a student at Western Governors University. 
        I hope to get my bachelor's in Software Development at the end of this year (Dec 2022) before
        continuing on to get my master's in Computer Science next year. Currently, I'm a Mechatronics
        Technician for Amazon, but for years I was actually a Henna Tattoo Artist! I'm very artistic and
        love to doodle or play music- I've been playing the violin for eleven years now, although sometimes
        I think about defecting to the cello. Aside from that, I absolutely adore my 10-year-old little brother 
        and I enjoy playing video games or going on adventures with him. 
        <br />
        I'm a native Spanish speaker, although I love learning languages (not just coding ones!) and am 
        conversational in Japanese. Thanks for visiting!

        {/* Hi, my name is Cassandra Pichardo. I'm 20 years old and a student at Western Governors University. 
        I hope to get my bachelor's in Software Development at the end of this year (Dec 2022) before
        continuing on to get my master's in Computer Science next year. Currently, I'm a Mechatronics
        Technician for Amazon, but for years I was actually a Henna Tattoo Artist! I'm very artistic and
        love to doodle or make music- I've been playing the violin for eleven years now, although sometimes
        I defect to the piano or cello. Aside from that, I absolutely adore my 10-year-old little brother 
        and I enjoy playing video games or going on adventures with him.  */}
      </div>
    </div>
  );
}