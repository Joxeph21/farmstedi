function InfoBox({ info }) {
  const { title, text, icon: Icon } = info;
  return (
    <li className="bg-brandLightGrey w-96 p-8 justify-center h-80 flex items-center flex-col gap-4 rounded-3xl">
      <div className="p-4 rounded-md text-brandGreen bg-[#E3F2D9] text-center">
        <Icon size={26} />
      </div>
      <h3 className="font-bold text-brandBlack text-2xl">{title}</h3>
      <p className="font-normal text-center">{text}</p>
    </li>
  );
}

export default InfoBox;
