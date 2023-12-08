import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = ({ Info }) => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1200,
    });
  }, []);
  return (
    <section className="Section flex justify-end items-end flex-col BgColor transition1000">
      <h1
        className="title TextColor transition1000 px-[100px] py-[40px]"
        data-aos="fade-up"
      >
        {Info.title}
      </h1>
      <article className="w-[100%] h-[65%] bg-blue100 px-[100px] relative">
        <div
          className="w-[275px] h-[275px] bg-slate-400 rounded-[50%] absolute top-[-28%] overflow-hidden BoxShadow"
          data-aos="fade-up"
        >
          <img src={require("./images/AboutProfile.jpg")} />
        </div>
        <div className="">
          <h1 className="">연정흠</h1>
        </div>
      </article>
    </section>
  );
};

export default About;
