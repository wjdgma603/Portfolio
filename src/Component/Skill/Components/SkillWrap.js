const SkillWrap = ({ Info }) => {
  const Source = Info.BackgroundColor;
  return (
    <div className="flex flex-col items-center mt-[20px]">
      <div
        className={`AppIcon`}
        style={{
          background: `${Info.BackgroundColor ? Info.BackgroundColor : "#fff"}`,
          padding: `${Info.usePadding ? Info.usePadding : `15px`}`,
        }}
        dangerouslySetInnerHTML={{ __html: Info.SvgPath }}></div>
      <div className="text-[18px] font-medium TextColor text-center whitespace-pre-wrap pt-[5px]">
        {Info.SkillName}
      </div>
    </div>
  );
};

export default SkillWrap;
