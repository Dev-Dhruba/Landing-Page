import { FaArrowRight } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const Feature = () => {
  const videos = [
    "03_AI Avatars.mp4",
    "03_Video Editing.mp4",
    "03_Screen Recording.mp4",
  ];
  const text = [
    "Make more Videos faster, with high-quality",
    "Create pro - looking videos, effortlessly",
    "Easily record yourself on your screen. Edit and share with anyone.",
  ];
  const spanText = ["AI Avatar", "Video Editing", "Recording"];

  const avatarVideos = [
    {
      src: "05_Add Subtitles_1 (1).mp4",
      buttonText: "Add Subtitles",
      overlayText: "I WANT TO SHARE"
    },
    {
      src: "05_Change  Background_1.mp4",
      buttonText: "Change Background",
      overlayText: "WE ARE PLEASED TO"
    },
    {
      src: "05_Add Music_1.mp4",
      buttonText: "Add Musics",
      overlayText: "HAS EXCEEDED"
    }
  ];

  const teamFeatures = [
    {
      src: "08_Brand Kit.mp4",
      alt: "Brand Kit"
    },
    {
      src: "08_Review Mode.mp4", 
      alt: "Review Mode"
    },
    {
      src: "08_Collaboration (1).mp4",
      alt: "Collaboration"
    },
    {
      src: "08_Assets Sharing.mp4",
      alt: "Assets Sharing"
    }
  ];

  return (
    <div>
      <p className="text-4xl font-bold mt-10 text-center text-yellow-400">WHEN CREATIVITY POPS OUT</p>
      <p className="text-white text-center mt-4">Various Styles, Countless Assets</p>
      <div className="mx-27 my-12 flex justify-between">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-black w-100 px-5 py-7 rounded-2xl group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer float-animation">
            <video
              src={video}
              autoPlay
              muted
              loop
              className="h-63 rounded-3xl transition-all duration-300 group-hover:shadow-lg"
            ></video>
            <p className="text-white text-center my-3 w-65">
              {text[index]}{" "}
              <span className="text-yellow-400">{spanText[index]}</span>
            </p>
            <button className="flex items-center justify-center rounded-3xl gap-2 w-48 h-12 bg-yellow-400 cursor-pointer font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg active:scale-95 group-hover:translate-y-0">
              Explore
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">

        <div className="mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            CREATE CUSTOM <span className="text-yellow-400">AI - AVATARS</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            More content, less time. Create Talking Head videos in seconds with your own digital clone
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black text-sm"><CiUser /></span>
            </div>
            <span className="text-white font-semibold">Real Human</span>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <img 
                src="humanImage.png" 
                alt="Real Human" 
                className="w-200 h-125 object-cover rounded-2xl transition-all duration-300 group-hover:shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black text-sm"><CiUser /></span>
            </div>
            <span className="text-yellow-400 font-semibold">AI- AVATARS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {avatarVideos.map((avatar, index) => (
              <div key={index} className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <video 
                  src={avatar.src} 
                  autoPlay 
                  muted 
                  loop
                  className="w-full h-64 object-cover rounded-2xl transition-all duration-300 group-hover:shadow-2xl"
                />
                <div className="mt-4">
                  <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg active:scale-95 mx-auto">
                    {avatar.buttonText}
                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            SCALE <span className="text-yellow-400">VIDEOS</span> ACROSS <span className="text-yellow-400">TEAMS</span>
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto">
            Empower Your Team To Easily Create On-Brand Content With Custom Templates And Brand Kit. Ensure Quality Through Simple Feedback And Review Flows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamFeatures.map((feature, index) => (
            <div key={index} className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <video
                src={feature.src} 
                alt={feature.alt} 
                autoPlay
                loop
                muted
                className="w-full h-auto rounded-2xl transition-all duration-300 group-hover:shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
