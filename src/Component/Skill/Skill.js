import SkillWrap from "./Components/SkillWrap";

const Skill = ({ Info }) => {
  return (
    <section className="w-[100%] h-[100vh] relative">
      <article className="relative">
        <div className="w-[100%] h-[100vh] absolute top-0 left-0">
          <img
            className="w-[100%] h-[100vh] object-cover dark:brightness-90"
            src={require("./images/Background.png")}
            alt="Skill Background"
          />
        </div>
      </article>
      <article className="absolute z-10 px-[100px] top-[50%] translate-y-[-50%] w-[100%]">
        <div className="title font-bold RTextColor mb-[30px]">{Info.title}</div>
        <div className="flex flex-wrap">
          <div className="p-[30px] BlurBox rounded-[30px]">
            <h1 className="text-[28px] font-bold TextColor">
              {Info.FrontEndSkill[0]}
            </h1>
            <div className="flex gap-x-[30px]">
              {Info.FrontEndSkill.slice(1).map((Skill, index) => (
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
