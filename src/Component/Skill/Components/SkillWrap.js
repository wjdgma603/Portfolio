const SkillWrap = ({ Info }) => {
  return (
    <div className="flex flex-col items-center mt-[20px]">
      <div
        className={`rounded-[17.5px] w-[100px] h-[100px] bg-[#ffffff]`}
        dangerouslySetInnerHTML={{ __html: Info.SvgPath }}></div>
      <div className="text-[18px] TextColor text-center whitespace-pre-wrap pt-[5px]">
        {Info.SkillName}
      </div>
    </div>
  );
};

export default SkillWrap;
