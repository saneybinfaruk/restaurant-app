const BoxTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[10px] h-[10px] bg-[#BD1F17]" />
      <h3 className="font-robotoBold text-[#BD1F17] text-base md:text-xl ">{title}</h3>
    </div>
  );
};

export default BoxTitle;
