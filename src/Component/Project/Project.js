import { useEffect, useState } from "react";
import SkillWrap from "../../Common/Component/SkillWrap";

const Project = ({ Info }) => {
  const [current, setCurrent] = useState({
    Object : Info.TeamProject,
    Index : 1
  })
  function MoveTo(Obj, Idx) {
    setCurrent({Object : Obj, Index : Idx})
  }
  useEffect(() => {
    const Accordion = document.querySelectorAll(".Accordion");
    Accordion.forEach((Acc) => {
      Acc.addEventListener("click", function () {
        Accordion.forEach((Acc) => {
          Acc.classList.remove("Active");
        });
        this.classList.add("Active");
      });
    });
    const AccordionTab = document.querySelectorAll(".AccordionTab");
    AccordionTab[0].classList.add("Active");
    AccordionTab.forEach((AccTab) => {
      AccTab.addEventListener("click", function () {
        AccordionTab.forEach((AccTab) => {
          AccTab.classList.remove("Active");
        });
        this.classList.add("Active");
      });
    });
  }, []);
  return (
    <section className="Section flex bg-slate-400">
      <article className="flex-1 shadow-md overflow-hidden">
        <div className="h-[125px] text-[36px] font-medium uppercase bg-white flex items-center justify-center shadow-md">
          {Info.title}
        </div>
        <div>
          <div onClick={() => MoveTo(Info.TeamProject, 1)} className="h-[110px] flex items-center justify-center bg-white relative cursor-pointer Accordion Active">
            <div className="text-[28px] font-medium translate500">
              {Info.TeamProject[0]}
            </div>
            <svg
              className="h-[25px] absolute top-[50%] right-[40px] translate-y-[-50%] fill-none stroke-[3px] translate500"
              viewBox="0 0 17 30">
              <path d="M1 1L15.359 15L1 29" strokeLinecap="round" />
            </svg>
          </div>
          <div className="overflow-hidden AccordionItem">
            {Info.TeamProject.slice(1).map((Project) => (
              <div
                key={Project.id}
                onClick={() => MoveTo(Info.TeamProject, Project.id)}
                className="h-[100px] text-[#3C3C4399] text-[24px] flex items-center justify-center font-medium bg-white200 AccordionTab">
                {Project.ProjectName} ({Project.Member}인)
              </div>
            ))}
          </div>
        </div>
        <div>
          <div onClick={() => MoveTo(Info.PersonalProject, 1)} className="h-[110px] flex items-center justify-center bg-white relative cursor-pointer Accordion">
            <div className="text-[28px] font-medium translate500">
              {Info.PersonalProject[0]}
            </div>
            <svg
              className="h-[25px] absolute top-[50%] right-[40px] translate-y-[-50%] rotate-[90deg] fill-none stroke-[#4a6bd6] stroke-[3px] "
              viewBox="0 0 17 30">
              <path d="M1 1L15.359 15L1 29" strokeLinecap="round" />
            </svg>
          </div>
          <div className="overflow-hidden AccordionItem">
            {Info.PersonalProject.slice(1).map((Project) => (
              <div
                key={Project.id}
                onClick={() => MoveTo(Info.PersonalProject, Project.id)}
                className="h-[100px] text-[#3C3C4399] text-[24px] flex items-center justify-center font-medium bg-white200 overflow-hidden AccordionTab">
                {Project.ProjectName}
              </div>
            ))}
          </div>
        </div>
      </article>
      <article className="flex-[3.2] bg-white shadow-md p-[100px]">
        <div className="text-[36px] font-medium mb-[50px]">
          {current.Object[0]}&nbsp;&#47;&nbsp;{current.Object[current.Index].ProjectName}
          {current.Object[current.Index].Member &&
            ` (${current.Object[current.Index].Member}인)`}
        </div>
        <div className="relative h-[100%]">
          <div className="absolute w-[45%] max-h-[50%] transition-all duration-[1500ms] z-[10] hover:w-[100%]">
            <img
              className="object-cover shadow-md"
              src={require(`./images/${current.Object[current.Index].ImgName}.png`)}
              alt={`${current.Object[current.Index].ProjectName} Project`}
            />
          </div>
          <div className="flex flex-col h-[100%] items-end">
            <div className="flex-1 w-[55%] pl-[40px]">
              <div className="">
                <div className="text-[24px] font-bold">주요 기술</div>
                <div className="flex gap-x-[20px] h-auto">
                  {current.Object[current.Index].Skill.map((Skill, index) => (
                    <SkillWrap key={index} Info={Skill} Project={true} />
                  ))}
                </div>
              </div>
              <div className="flex mt-[50px] justify-between">
                <div className="flex flex-col items-center justify-between">
                  <div className="text-[24px] font-bold">수행기간</div>
                  <div className="flex flex-col items-center">
                    <div className="text-[20px] font-medium">
                      {current.Object[current.Index].ProjectDate[1]}개월
                    </div>
                    <div className="text-[14px] mt-[10px]">
                      &#40;{current.Object[current.Index].ProjectDate[0]}&#41;
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div className="text-[24px] font-bold">개발&nbsp;기여도</div>
                  <div>
                    <span className="relative text-[50px] after:content-['%'] after:text-[20px] after:absolute after:left-[105%] after:bottom-[8px] after:font-bold">
                      {current.Object[current.Index].Contribution}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div className="text-[24px] font-bold">기능</div>
                  <div
                    className="whitespace-pre-wrap text-[16px] text-center"
                    dangerouslySetInnerHTML={{
                      __html: current.Object[current.Index].Subject,
                    }}></div>
                </div>
              </div>
            </div>
            <div className="flex-[1.2] w-[100%]">
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: current.Object[current.Index].Content,
                }}></div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Project;
