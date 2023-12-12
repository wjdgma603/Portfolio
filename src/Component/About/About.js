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
        className="title TextColor font-bold transition1000 px-[100px] py-[40px]"
        data-aos="fade-up">
        {Info.title}
      </h1>
      <article className="w-[100%] h-[70%] bg-blue100 px-[100px] relative flex flex-col dark:bg-blue">
        <div
          className="w-[275px] h-[275px] bg-slate-400 rounded-[50%] absolute top-[-137.5px] overflow-hidden BoxShadow"
          data-aos="fade-up">
          <img src={require("./images/AboutProfile.jpg")} alt="ProfileImage" />
        </div>
        <div
          className="ml-[300px] mt-[15px] pb-[5px] RBorder"
          data-aos="fade-up"
          data-aos-delay="500">
          <h1 className="text-[40px] font-bold RTextColor">{Info.Name[0]}</h1>
          <h1 className="text-[28px] font-medium RTextColor">{Info.Name[1]}</h1>
        </div>
        <div className="w-[100%] h-auto flex">
          <div
            className="w-[300px] pt-[25px]"
            data-aos="fade-up"
            data-aos-delay="600">
            {Info.SimpleCV.map((CVdata, index) => (
              <p
                className="RTextColor text-[20px] pb-[5px]"
                key={CVdata[index]}>
                &middot; {CVdata}
              </p>
            ))}
          </div>
          <div
            className="flex-1 mt-[30px] border-2 border-white dark:border-darkmodeWhite rounded-[30px] px-[100px] py-[50px] flex"
            data-aos="fade-up"
            data-aos-delay="700">
            {Info.BasicInformation.map((BasicInfo, index) => (
              <div key={index} className="flex-1 RTextColor">
                <h1 className="text-[26px] AfterDot">
                  {Object.keys(BasicInfo)}
                </h1>
                <p className="text-[20px]">{Object.values(BasicInfo)}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex-1 AfterBorder"
          data-aos="fade-up"
          data-aos-delay="700">
          <h1 className="text-[32px] RTextColor absolute top-[-40px]">
            사회적 경험
          </h1>
          <div className="w-[100%] flex justify-evenly absolute top-[104px]">
            {Info.SocialExperience.map((SocialExp, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={700 + 100 * index}>
                <div className="text-center RTextColor text-[18px] pb-[15px]">
                  {Object.keys(SocialExp)}
                </div>
                <div className="w-[10px] h-[10px] rounded-[50%] RBgColor AfterDotted"></div>
                <div className="text-center RTextColor text-[18px] whitespace-pre-wrap pt-[60px]">
                  {Object.values(SocialExp)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};
export default About;
