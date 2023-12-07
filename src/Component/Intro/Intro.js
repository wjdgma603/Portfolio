const Intro = () => {
  return (
    <section className="w-full h-screen flex items-center justify-between px-[100px] select-none bg-white dark:bg-black100 transition1000">
      <article className="text-[56px] font-bold tracking-[-3.2px] text-black100 dark:text-darkmodeWhite transition1000 break-keep">
        <span className="text-blue100 UnderLine inline-block after:origin-left after:border-b-[6px] after:border-solid after:duration-[1.5s] after:border-b-blue100">
          정직한 개발자
        </span>
        가 되고싶은
        <br />
        <span className="text-blue UnderLine inline-block after:origin-left after:border-b-[6px] after:border-solid after:duration-[1.5s] after:border-b-blue">
          연정흠
        </span>
        입니다.
      </article>
      <article className="w-[500px] h-[500px] animate-Sbounce">
        <img
          className="object-cover hover:scale-110 transition-transform ease-in-out duration-1000"
          src={require("./images/Intro1.png")}
          alt="IntroImage"
        />
      </article>
    </section>
  );
};

export default Intro;
