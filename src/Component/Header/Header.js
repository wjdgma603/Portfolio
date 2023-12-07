import Info from "../../Common/Json/Info.json";
const header = () => {
  return (
    <header className="Header w-full h-[80px] flex justify-center items-center absolute top-0 left-0">
      <nav className="">
        <ul className="flex w-[600px] justify-between">
          {Info.map((InfoItem) => (
            <li>
              <a className="text-[20px] text-black100" href="/">
                {InfoItem.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className=""></div>
    </header>
  );
};

export default header;
