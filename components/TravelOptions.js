function TravelOptions({ emoji, title, active }) {
  return (
    <div
      className={
        active
          ? "bg-orange h-28 w-16 rounded-full items-center justify-center shadow-lg"
          : "bg-white h-28 w-16 rounded-full items-center justify-center shadow-lg hover:bg-orange cursor-pointer group transition duration-15"
      }
    >
      <p className="bg-lightGray rounded-full p-1 m-4 w-8 h-8">{emoji}</p>
      <p
        className={
          active ? "text-white m-3" : "text-black m-3 group-hover:text-white"
        }
      >
        {title}
      </p>
    </div>
  );
}

export default TravelOptions;
