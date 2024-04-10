import React from "react";
import Marquee from "react-fast-marquee";
import Testimonial from "./Testimonial";

const CardMarquee = () => (
  <Marquee className="dark:bg-slate-900">
    <Testimonial className="gap-6" />
    <Testimonial className="gap-6" />
    <Testimonial className="gap-6" />
    <Testimonial className="gap-6" />
    <Testimonial className="gap-6" />
  </Marquee>
);

export default CardMarquee;
