const header = ({ Info, toggleDarkMode, darkmode }) => {
  const darkmoded = darkmode ? "left-[48%]" : "left-[9%]";
  console.log(darkmoded);
  return (
    <header className="Header w-full h-[80px] flex justify-center items-center absolute top-0 left-0 select-none">
      <nav>
        <ul className="flex w-[600px] justify-between">
          {Info.slice(1).map((InfoItem) => (
            <li key={InfoItem.title}>
              <a
                className="text-[20px] text-black100 dark:text-darkmodeWhite transition1000 font-medium UnderLine inline-block after:origin-center after:border-b-2 after:border-solid after:duration-[.5s] after:border-black100"
                href="/"
              >
                {InfoItem.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="w-[48px] h-[28px] bg-slate-400 dark:bg-darkmodeGray absolute right-[250px] rounded-[25px] cursor-pointer shadow-md transition1000"
        onClick={() => toggleDarkMode()}
      >
        <div
          className={`w-[22px] h-[22px] bg-white dark:bg-darkmodeWhite absolute top-[50%] ${darkmoded} translate-y-[-50%] rounded-[50%] transition1000`}
        ></div>
      </div>
    </header>
  );
};

export default header;
