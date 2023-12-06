import Info from "../../Common/Json/Info.json";
const header = () => {
  return (
    <header className="Header w-full h-[80px] border-black border flex justify-center">
      <nav className="">
        <ul>
          {Info.map((InfoItem) => (
            <li>
              <a href="/">{InfoItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className=""></div>
    </header>
  );
};

export default header;
