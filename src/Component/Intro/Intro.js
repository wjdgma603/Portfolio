import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Intro = ({ Info }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <section className="Section flex betweencenter px-[100px] select-none BgColor transition1000">
      <article
        className="text-[56px] font-bold tracking-[-3.2px] TextColor transition1000 break-keep"
        data-aos="fade-right">
        <span className="text-blue100 UnderLine inline-block after:origin-left after:border-b-[6px] after:border-solid after:duration-[1.5s] after:border-b-blue100">
          {Info.HighlightTitle[0]}
        </span>
        {Info.HighlightTitle[1]}
        <br />
        <span className="text-blue UnderLine inline-block after:origin-left after:border-b-[6px] after:border-solid after:duration-[1.5s] after:border-b-blue">
          {Info.HighlightTitle[2]}
        </span>
        {Info.HighlightTitle[3]}
      </article>
      <article className="w-[500px] h-[500px] animate-Sbounce">
        <img
          className="object-cover hover:scale-110 transition-transform ease-in-out duration-1000"
          src={require("./images/Intro1.png")}
          alt="IntroImage"
          data-aos="zoom-in"
        />
      </article>
    </section>
  );
};

export default Intro;
