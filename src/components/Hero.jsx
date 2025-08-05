const Hero = () => {
  const videos = [
    "03_Collaboration.mp4",
    "03_Publishing.mp4",
    "AI_Eye contact correction.mp4",
  ];
  return (
    <div>
      <div className="text-white text-center font-bold text-6xl mx-74 mt-20">
        <p>CREATE PRO LEVEL</p> <br />
        VIDEOS IN THE{" "}
        <span className="bg-white text-yellow-400 font-bold text-6xl px-8 py-3 inline-block rounded-lg transform -rotate-2 shadow-lg">
          BLINK OF AI
        </span>
      </div>
      <p className="mx-89 my-7 text-center text-white text-[20px]">
        Bring <span className="text-yellow-400">AI-Powered</span>efficiency and
        simplicity to your everyday editing
      </p>
      <div className="flex mx-28 justify-between">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            loop
            muted
            className="h-81 rounded-3xl"
          ></video>
        ))}
      </div>
      <div className="flex gap-5 mt-10 w-full justify-center text-2xl">
        <button className="bg-yellow-400 h-17 rounded-2xl w-68 cursor-pointer font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg active:scale-95 btn-glow">
          Try text to video
        </button>
        <button className="bg-yellow-400 h-17 rounded-2xl w-68 cursor-pointer font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg active:scale-95 btn-glow">
          Start free trial
        </button>
      </div>
    </div>
  );
};

export default Hero;
