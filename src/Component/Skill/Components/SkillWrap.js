const SkillWrap = ({ Info }) => {
  return (
    <div className="flex flex-col items-center mt-[20px] transition1000 cursor-pointer hover:scale-[1.15] ">
      <div
        className={`AppIcon`}
        style={{
          background: `${Info.BackgroundColor ? Info.BackgroundColor : "#fff"}`,
          padding: `${Info.usePadding ? Info.usePadding : `15px`}`,
        }}
        dangerouslySetInnerHTML={{ __html: Info.SvgPath }}></div>
      <div className="text-[18px] font-medium APPTextColor text-center whitespace-pre-wrap pt-[5px]">
        {Info.SkillName}
      </div>
    </div>
  );
};

export default SkillWrap;
