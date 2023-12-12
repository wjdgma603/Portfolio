const SkillWrap = ({ Info }) => {
  return (
    <div className="flex flex-col items-center mt-[20px]">
      <div className="rounded-[17.5px] w-[100px] h-[100px] bg-slate-500"></div>
      <div className="text-[18px] TextColor text-center whitespace-pre-wrap pt-[5px]">
        {Object.values(Info)}
      </div>
    </div>
  );
};

export default SkillWrap;
