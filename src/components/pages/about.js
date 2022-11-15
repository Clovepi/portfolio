import React from "react";
import profilePicture from "../../../static/assets/images/auth/0.png";

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
        Hi, my name is Cassandra Pichardo. I'm 21 years old and a student at Western Governors University. 
        I hope to get my bachelor's in Software Development by the end of next year (Fall 2023!) before
        continuing on to get my master's in Computer Science. Currently, I'm an insurance adjuster for State
        Farm, but for years I was actually a Henna Tattoo Artist! I'm very artistic and
        love to draw or play music- I've been playing the violin for twelve years now, although sometimes
        I think about defecting to the cello. Aside from that, I absolutely adore my 11-year-old little brother 
        and I enjoy playing video games or going on adventures with him. 
        <br />
        I'm a native Spanish speaker, although I love learning languages (not just coding ones!) and am 
        conversational in Japanese. Thanks for visiting!
      </div>
    </div>
  );
}