import { ViewGridIcon } from "@heroicons/react/solid";
import TravelOptions from "./TravelOptions";

function AppRight() {
  return (
    <div className="p-10">
      <header className="flex justify-between">
        <ViewGridIcon className="w-8 h-8" />

        <div className="flex items-center">
          <p className="link">Gallery</p>
          <p className="link">Stories</p>
          <img
            className="h-10 w-10 rounded-3xl"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1622777589/ben-sweet-2LowviVHZ-E-unsplash_1_nud97c.jpg"
            alt=""
          />
        </div>
      </header>

      <h1 className="text-blue font-semibold text-3xl">Discover</h1>
      <div className="flex w-80 justify-evenly mt-10">
        <p className="text-orange text-xl border-b-[2px] border-orange">
          Popular
        </p>
        <p className="text-gray text-xl hover:border-b-[2px] border-orange cursor-pointer duration-100 hover:text-orange">
          Adventure
        </p>
        <p className="text-gray text-xl hover:border-b-[2px] border-orange cursor-pointer duration-100 hover:text-orange">
          Tour
        </p>
      </div>

      <div className="flex overflow-scroll hide-scrollbar mt-5">
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1531101860752-fdad86cec994"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1457459686225-c7db79d4e59f"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1575351881847-b3bf188d9d0a"
          alt="hot air balloons"
        />
      </div>

      <h1 className="text-blue font-bold text-4xl mt-5">Types of Travel</h1>
      <div className="flex justify-evenly mt-2">
        <TravelOptions emoji="⭐" title="Luxury" active />
        <TravelOptions emoji="🦁" title="Safari" />
        <TravelOptions emoji="🚄" title="Train" />
        <TravelOptions emoji="👪" title="Family" />
        <TravelOptions emoji="👨" title="Alone" />
      </div>
    </div>
  );
}

export default AppRight;
