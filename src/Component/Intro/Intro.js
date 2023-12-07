const Intro = () => {
  return (
    <section className="IntroSection w-full h-screen flex items-center justify-between px-[100px] select-none">
      <article className="text-[56px] font-bold tracking-[-3.2px] text-black100">
        <span className="text-blue100">정직한 개발자</span>가 되고싶은
        <br />
        <span className="text-blue">연정흠</span> 입니다.
      </article>
      <article className="w-[500px] h-[500px] animate-Sbounce">
        <img
          className="object-cover"
          src={require("./images/Intro1.png")}
          alt="IntroImage"
        />
      </article>
    </section>
  );
};

export default Intro;
