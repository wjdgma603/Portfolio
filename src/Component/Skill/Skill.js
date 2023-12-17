import SkillWrap from "../../Common/Component/SkillWrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skill = ({ Info }) => {
  useEffect(() => {
    Aos.init({
      offset: -100,
      duration: 1200,
    });
  }, []);
  return (
    <section id="Skill" className="Section relative">
      <article className="relative">
        <div className="w-[100%] h-[100vh] absolute top-0 left-0">
          <img
            className="w-[100%] h-[100vh] object-cover dark:brightness-[80%]"
            src={require("./images/Background.png")}
            alt="Skill Background"
          />
        </div>
      </article>
      <article className="absolute z-10 px-[100px] top-[50%] translate-y-[-50%] w-[100%] select-none">
        <div className="title font-bold RTextColor mb-[30px]">{Info.title}</div>
        <div className="flex flex-wrap justify-between gap-y-[50px]">
          <div
            className="p-[30px] BlurBox rounded-[30px]"
            data-aos="zoom-in"
            data-aos-delay="100">
            <h1 className="text-[28px] font-bold APPTextColor">
              {Info.FrontEndSkill[0]}
            </h1>
            <div className="flex gap-x-[30px]">
              {Info.FrontEndSkill.slice(1).map((Skill, index) => (
                <SkillWrap key={index} Info={Skill} />
              ))}
            </div>
          </div>
          <div
            className="p-[30px] BlurBox rounded-[30px]"
            data-aos="zoom-in"
            data-aos-delay="600">
            <h1 className="text-[28px] font-bold APPTextColor">
              {Info.CommunicationSkill[0]}
            </h1>
            <div className="flex gap-x-[30px]">
              {Info.CommunicationSkill.slice(1).map((Skill, index) => (
                <SkillWrap key={index} Info={Skill} />
              ))}
            </div>
          </div>
          <div
            className="p-[30px] BlurBox rounded-[30px]"
            data-aos="zoom-in"
            data-aos-delay="1200">
            <h1 className="text-[28px] font-bold APPTextColor">
              {Info.DesignSkill[0]}
            </h1>
            <div className="flex gap-x-[30px]">
              {Info.DesignSkill.slice(1).map((Skill, index) => (
                <SkillWrap key={index} Info={Skill} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skill;
