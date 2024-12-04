function SoilButton({ active, soil, setActive }) {
  const { image, name } = soil;
  return (
    <li
      onClick={() => setActive(name)}
      role="button"
      className="w-24 cursor-pointer flex flex-col gap-2 items-center "
    >
      <div
        className={`${
          active ? "ring-2 ring-brandGreen" : "hover:ring-2 ring-brandGreen"
        } transition-colors ease-in duration-200   flex items-center justify-center w-full h-14 rounded-lg  bg-[#F2F6DD]`}
      >
        <img
          src={image}
          className=" object-cover aspect-auto"
          alt="name_soil"
        />
      </div>
      <p className="font-normal text-xs">{name}</p>
    </li>
  );
}

export default SoilButton;
