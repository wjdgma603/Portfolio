import { useEffect, useState } from "react";
import SkillWrap from "../../Common/Component/SkillWrap";

const Project = ({ Info }) => {
  const [current, setCurrent] = useState({
    Object: Info.TeamProject,
    Index: 2,
  });
  function MoveTo(Obj, Idx) {
    setCurrent({ Object: Obj, Index: Idx });
  }
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    const Accordion = document.querySelectorAll(".Accordion");
    const AccordionTab = document.querySelectorAll(".AccordionTab");
    const AccordionItem = document.querySelectorAll(".AccordionItem");
    Accordion.forEach((Acc) => {
      Acc.addEventListener("click", function () {
        AccordionTab.forEach((Acc) => {
          Acc.classList.remove("Active");
        });
        AccordionItem.forEach((accItem) => {
          accItem.firstChild.classList.add("Active");
        });
        Accordion.forEach((Acc) => {
          Acc.classList.remove("Active");
        });
        this.classList.add("Active");
      });
    });
    AccordionTab.forEach((AccTab) => {
      AccTab.addEventListener("click", function () {
        AccordionTab.forEach((AccTab) => {
          AccTab.classList.remove("Active");
        });
        this.classList.add("Active");
      });
    });
    AccordionTab[0].classList.add("Active");
  }, []);
  return (
    <section id="Project" className="Section relative flex">
      <article className="flex-1 shadow-md bg-slate-400 dark:bg-darkmodeBlack400 h-[130vh]">
        <div className="h-[125px] text-[36px] font-medium uppercase DeepBgColor flex items-center justify-center shadow-md TextColor">
          {Info.title}
        </div>
        <div>
          <div
            onClick={() => MoveTo(Info.TeamProject, 2)}
            className="h-[110px] flex items-center justify-center BgColor TextColor relative cursor-pointer Accordion Active">
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
            {Info.TeamProject.slice(1)
              .reverse()
              .map((Project) => (
                <div
                  key={Project.id}
                  onClick={() => MoveTo(Info.TeamProject, Project.id)}
                  className="h-[100px] text-[#3C3C4399] dark:text-[#ffffff99] text-[24px] flex items-center justify-center font-medium TabBgColor AccordionTab">
                  {Project.ProjectName} ({Project.Member}인)
                </div>
              ))}
          </div>
        </div>
        <div>
          <div
            onClick={() => MoveTo(Info.PersonalProject, 2)}
            className="h-[110px] flex items-center justify-center BgColor TextColor relative cursor-pointer Accordion">
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
            {Info.PersonalProject.slice(1)
              .reverse()
              .map((Project) => (
                <div
                  key={Project.id}
                  onClick={() => MoveTo(Info.PersonalProject, Project.id)}
                  className="h-[100px] text-[#3C3C4399] dark:text-[#ffffff99] text-[24px] flex items-center justify-center font-medium TabBgColor overflow-hidden AccordionTab">
                  {Project.ProjectName}
                </div>
              ))}
          </div>
        </div>
      </article>
      <article className="flex-[3.2] h-[120vh] BgColor TextColor p-[75px]">
        <div className="text-[36px] font-medium pb-[40px]">
          {current.Object[0]}&nbsp;&#47;&nbsp;
          {current.Object[current.Index].ProjectName}
          {current.Object[current.Index].Member &&
            ` (${current.Object[current.Index].Member}인)`}
        </div>
        <div className="relative">
          <div
            className="absolute w-[45%] max-h-[50%] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            <img
              className="object-cover shadow-md"
              src={require(`./images/${
                current.Object[current.Index].ImgName
              }.png`)}
              alt={`${current.Object[current.Index].ProjectName} Project`}
            />
          </div>
          <div className="flex flex-col items-end">
            <div className=" w-[55%] pl-[40px]">
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
                      {current.Object[current.Index].ProjectDate[1]}
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
            <div className="flex flex-col mt-[60px] w-[100%]">
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: current.Object[current.Index].Content,
                }}></div>
              <div className="w-[100%] flex justify-end gap-x-[30px] mt-[40px]">
                {current.Object[current.Index].Link.MoreView && (
                  <div>
                    <a
                      className="relative h-[60px] w-[200px] bg-slate-200 text-black dark:text-black rounded-[30px] flex justify-center items-center shadow-md"
                      href={current.Object[current.Index].Link.MoreView}
                      target="blank">
                      <div className="flex items-center gap-x-[10px]">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 30 30"
                          fill="none">
                          <path
                            d="M0 22.1384C0.0822663 21.733 0.146904 21.3158 0.252675 20.9162C0.58174 19.6822 1.21637 18.6245 2.11542 17.7195C4.18383 15.6511 6.24637 13.571 8.32653 11.5143C10.9884 8.87592 15.3779 8.74077 18.2044 11.197C18.2984 11.2793 18.3865 11.3674 18.4688 11.4438C17.5815 12.3252 16.7001 13.189 15.8069 14.0763C15.0782 13.4064 14.1733 13.1009 13.1391 13.1773C12.3517 13.236 11.6466 13.5063 11.0883 14.0646C8.9494 16.1859 6.81048 18.313 4.69506 20.4637C3.69611 21.4803 3.46694 22.9728 4.04868 24.2303C4.64217 25.5172 5.92318 26.3046 7.33933 26.2341C8.16787 26.193 8.90239 25.8933 9.49588 25.3116C10.6241 24.2068 11.7347 23.0845 12.8512 21.9621C12.9628 21.8505 13.051 21.7859 13.2273 21.8564C14.6434 22.4087 16.1007 22.6379 17.6109 22.3911C17.6285 22.3911 17.6461 22.397 17.6931 22.4087C17.6226 22.491 17.558 22.5615 17.4933 22.6261C15.801 24.3185 14.1028 25.9991 12.4281 27.6973C11.1823 28.9548 9.71918 29.7481 7.94458 29.9361C7.88582 29.942 7.83293 29.9655 7.78005 29.9831C7.36871 29.9831 6.96326 29.9831 6.55193 29.9831C6.47554 29.9655 6.40502 29.9361 6.32863 29.9302C3.51982 29.6129 1.08121 27.568 0.299684 24.8473C0.164533 24.3831 0.0998948 23.9013 0 23.4253C0 22.9963 0 22.5674 0 22.1384Z"
                            fill="black"
                          />
                          <path
                            d="M11.4998 18.5365C12.3871 17.6551 13.2567 16.7913 14.0911 15.9569C14.5377 16.1861 14.9726 16.5034 15.4603 16.6503C16.7707 17.0499 17.9812 16.8148 18.9742 15.8394C21.0485 13.7886 23.1052 11.7202 25.1677 9.65178C26.1255 8.68809 26.4664 7.52461 26.0785 6.21423C25.7083 4.95673 24.8445 4.15169 23.5635 3.84613C22.4235 3.57583 21.3717 3.83438 20.5255 4.63354C19.3621 5.73238 18.2456 6.87823 17.1232 8.01821C16.9646 8.18274 16.8353 8.21212 16.6179 8.13573C15.2605 7.64801 13.862 7.43059 12.4223 7.65389C12.3577 7.66564 12.293 7.65389 12.1873 7.65389C12.2578 7.5775 12.2989 7.53049 12.3459 7.48348C14.1382 5.69125 15.9245 3.88726 17.7285 2.10679C21.4716 -1.58932 27.7297 -0.231929 29.5102 4.6923C30.5268 7.50698 29.9509 10.0749 27.8766 12.2255C25.8258 14.3527 23.7163 16.427 21.6126 18.5013C18.7803 21.2866 14.3556 21.316 11.5644 18.6012C11.5409 18.5836 11.5233 18.56 11.4998 18.5365Z"
                            fill="black"
                          />
                        </svg>
                        <div className="text-[22px] font-bold">More view</div>
                      </div>
                    </a>
                  </div>
                )}
                {current.Object[current.Index].Link.GitHub && (
                  <div>
                    <a
                      className="relative h-[60px] w-[170px] bg-[#333] rounded-[30px] flex justify-center items-center shadow-md"
                      href={current.Object[current.Index].Link.GitHub}
                      target="blank">
                      <div className="flex items-center gap-x-[10px]">
                        <svg
                          width="34"
                          height="33"
                          viewBox="0 0 34 33"
                          fill="none">
                          <path
                            d="M0 15.5934C0.0838596 14.9847 0.156582 14.3741 0.254855 13.7687C0.640085 11.3869 1.55796 9.21695 2.92723 7.23463C4.99882 4.23703 7.77536 2.13611 11.2156 0.913607C13.5492 0.087313 15.9622 -0.145978 18.4275 0.0834031C21.4989 0.37013 24.2623 1.45187 26.7289 3.2765C29.7295 5.49667 31.7586 8.40695 32.8278 11.9682C33.5137 14.2555 33.6618 16.5949 33.3309 18.952C32.6791 23.6028 30.3552 27.2827 26.6353 30.1128C25.2856 31.1392 23.7663 31.8723 22.1586 32.4203C21.4209 32.6705 20.921 32.3186 20.9177 31.5451C20.9125 30.103 20.9177 28.6609 20.9145 27.2188C20.9145 26.502 20.8719 25.7806 20.5567 25.1205C20.3733 24.7354 20.1171 24.3835 19.8918 24.0127C20.5024 23.8993 21.1667 23.8172 21.8107 23.6497C23.5141 23.2118 25.0445 22.4598 26.0797 20.9708C26.8331 19.8884 27.1817 18.6503 27.335 17.3528C27.4516 16.3714 27.4857 15.3868 27.2957 14.4067C27.0938 13.3361 26.6046 12.3398 25.8799 11.5231C25.8185 11.4653 25.7768 11.3897 25.7607 11.3071C25.7446 11.2245 25.7549 11.1389 25.7901 11.0624C26.2717 9.69396 26.0856 8.35156 25.5752 7.03327C25.5438 6.95246 25.4055 6.87557 25.3079 6.86188C24.7261 6.78043 24.1752 6.94334 23.6641 7.18315C22.8196 7.5787 22.0033 8.03485 21.1667 8.448C21.0095 8.52962 20.8299 8.5582 20.655 8.52946C18.0872 7.87893 15.3964 7.87893 12.8286 8.52946C12.6537 8.56216 12.4728 8.52993 12.3202 8.43888C11.2568 7.76572 10.1346 7.22876 8.91336 6.9088C8.89174 6.90294 8.87143 6.89512 8.84785 6.89055C8.06625 6.72634 7.93063 6.81366 7.70329 7.57739C7.35541 8.76079 7.29251 9.93963 7.70919 11.1237C7.72375 11.1812 7.72543 11.2412 7.71411 11.2994C7.70279 11.3576 7.67874 11.4126 7.64367 11.4606C6.24558 13.0519 5.9239 14.9319 6.11455 16.9618C6.22658 18.1504 6.50764 19.2869 7.04486 20.3569C7.79895 21.8636 9.07584 22.7837 10.62 23.3154C11.5373 23.6315 12.52 23.7638 13.4726 23.9775C13.5092 23.9848 13.5461 23.9902 13.5833 23.9938C13.3396 24.435 13.0887 24.8703 12.858 25.316C12.7761 25.4695 12.7274 25.6385 12.7152 25.8119C12.7008 26.1631 12.5154 26.3221 12.1957 26.4082C11.135 26.6936 10.0835 26.878 9.06863 26.2589C8.53599 25.9331 8.13963 25.477 7.82384 24.9472C7.34099 24.1306 6.66422 23.5318 5.74897 23.2626C5.41026 23.1629 5.02372 23.1897 4.66273 23.2112C4.44194 23.2242 4.36987 23.4028 4.51925 23.5878C4.66862 23.7729 4.81538 23.9827 5.01258 24.0968C5.91145 24.6148 6.41592 25.4359 6.81949 26.3384C7.04945 26.8545 7.26631 27.3694 7.7046 27.761C8.40824 28.3892 9.25732 28.627 10.166 28.6674C10.9522 28.7026 11.7456 28.6746 12.5901 28.6746C12.5901 29.1464 12.5901 29.6971 12.5901 30.247C12.5901 30.67 12.6065 31.0942 12.6052 31.5158C12.6052 32.2978 12.0869 32.6725 11.3453 32.4216C8.87012 31.5829 6.6937 30.2607 4.86648 28.3957C3.09757 26.5874 1.74271 24.5106 0.908698 22.1138C0.44211 20.7607 0.153843 19.3531 0.051102 17.9263C0.0412747 17.7959 0.017034 17.6728 0 17.5457V15.5934Z"
                            fill="white"
                          />
                        </svg>
                        <div className="text-[22px] font-bold text-[#fff]">
                          Github
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        className="fixed top-0 left-0 bg-[#00000080] z-20 w-[100%] h-[100%] items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: isOpen ? "flex" : "none" }}>
        <div className="h-[70%] w=[100%]">
          <img
            className="h-[100%] object-cover"
            src={require(`./images/${
              current.Object[current.Index].ImgName
            }.png`)}
          />
        </div>
      </article>
    </section>
  );
};

export default Project;
