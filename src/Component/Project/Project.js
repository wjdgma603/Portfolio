import { useEffect, useState } from "react";

const Project = ({ Info }) => {
  const [index, setIndex] = useState();
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
    const AccordionItem = document.querySelectorAll(".AccordionItem");
  }, []);
  return (
    <section className="Section flex bg-slate-400">
      <article className="flex-1 shadow-md">
        <div className="h-[125px] text-[36px] font-medium uppercase bg-white flex items-center justify-center shadow-md">
          {Info.title}
        </div>
        <div>
          <div className="h-[110px] flex items-center justify-center bg-white relative cursor-pointer Accordion Active">
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
            {Info.TeamProject.slice(1).map((Project, index) => (
              <div
                key={(Project.idx = index)}
                className="h-[100px] text-[#3C3C4399] text-[24px] flex items-center justify-center font-medium bg-white200">
                {Project.ProjectName} ({Project.Member}인)
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="h-[110px] flex items-center justify-center bg-white relative cursor-pointer Accordion">
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
            {Info.PersonalProject.slice(1).map((Project, index) => (
              <div
                key={(Project.idx = index)}
                className="h-[100px] text-[#3C3C4399] text-[24px] flex items-center justify-center font-medium bg-white200">
                {Project.ProjectName}
              </div>
            ))}
          </div>
        </div>
      </article>
      <article className="flex-[3.2] bg-white shadow-md"></article>
    </section>
  );
};

export default Project;
