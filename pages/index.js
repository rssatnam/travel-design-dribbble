import Head from "next/head";
import AppRight from "../components/AppRight";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative font-poppins flex flex-col h-screen justify-center items-center !bg-cover !bg-bottom object-contain rounded-r-3xl"
        style={{
          background:
            "url(/mads-schmidt-rasmussen-xfngap_DToE-unsplash_k3yczw.jpg)",
          flex: "0.6",
        }}
      >
        <h2 className="text-2xl text-white font-bold absolute top-10 left-10">
          TooTravel
        </h2>
        <div className="w-3/5">
          <h1 className="text-white text-5xl font-semibold ">
            The most beautiful places in the world!
          </h1>
          <p className="text-white text-sm mt-6">
            Plan your vacation on the most beuatiful places in the world
          </p>
          <button className="bg-orange text-white px-16 py-3 mt-6 rounded-xl">
            Get Started
          </button>
        </div>

        <div className="absolute flex items-center justify-center left-20 bottom-10">
          <p className="text-white mr-2">01</p>
          <div className="h-[2px] w-8 bg-white mr-2"></div>
          <div className="h-[2px] w-8 bg-white opacity-20 mr-2 hover:opacity-100 cursor-pointer"></div>
          <div className="h-[2px] w-8 bg-white opacity-20 mr-2 hover:opacity-100 cursor-pointer"></div>
          <p className="text-white">03</p>
        </div>
      </div>
      <div style={{ flex: "0.4" }}>
        <AppRight />
      </div>
    </div>
  );
}
