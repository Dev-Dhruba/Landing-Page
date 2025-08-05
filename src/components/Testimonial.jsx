import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "EditAura is my one-stop video editing shop! It's cut my editing time by around 70%, freeing me to focus on my online career coaching business.",
      name: "Nadeem L",
      title: "Entrepreneur & Owner,",
      company: "TheCareerCEO.com",
      logo: "cloud.png",
      avatar: "image1.png"
    },
    {
      id: 2,
      text: "I love using EditAura. The subtitles are the most accurate I've seen on the market. It's helped take my content to the next level.",
      name: "Laura Haleydt",
      title: "Brand Marketing Manager,",
      company: "Carlsberg Importers",
      logo: "logo2.png",
      avatar: "image2.png"
    },
    {
      id: 3,
      text: "EditAura has been game-changing. It's allowed us to create gorgeous content for social promotion and ad units with ease.",
      name: "Max Alter",
      title: "Director of Audience Development,",
      company: "NBCUniversal",
      logo: "logo3.png",
      avatar: "image3.png"
    }
  ];

  // Company logos for trusted by section
  const companyLogos = [
    { src: "amazon.png", alt: "Amazon" },
    { src: "merck.png", alt: "Merck" },
    { src: "netflix.png", alt: "Netflix" },
    { src: "visa.png", alt: "Visa" },
    { src: "ventura.png", alt: "Ventura" },
    { src: "google.png", alt: "Google" },
    { src: "amazon.png", alt: "Amazon" },
    { src: "merck.png", alt: "Merck" },
    { src: "netflix.png", alt: "Netflix" },
    { src: "visa.png", alt: "Visa" },
    { src: "ventura.png", alt: "Ventura" },
    { src: "google.png", alt: "Google" }
  ];

  return (
    <section className=" py-16 px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            LOVED BY CREATORS.
          </h2>
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            LOVED BY THE FORTUNE <span className="text-yellow-400">500</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl pulse-hover ${
                index === 0 ? 'border-l-8 border-yellow-400' : 
                index === 1 ? 'border-l-8 border-yellow-400' : 
                'border-l-8 border-yellow-400'
              }`}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">"</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-800 text-sm leading-relaxed">
                  <span className="text-yellow-400 font-bold">EditAura</span>
                  {testimonial.text.replace('EditAura', '')}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs">
                    <img src={testimonial.avatar} alt="" />
                  </span>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs">{testimonial.title}</p>
                  <p className="text-gray-600 text-xs">{testimonial.company}</p>
                </div>

                <div className="w-16 h-8 flex items-center justify-center">
                  <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="max-w-full max-h-full object-contain" />
                </div>
              </div>

              <div className={`absolute -bottom-4 ${
                index === 0 ? 'left-8' : 
                index === 1 ? 'left-1/2 transform -translate-x-1/2' : 
                'right-8'
              } w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white`}></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-lg active:scale-95 flex items-center space-x-2 mx-auto">
            <span>View More</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>


        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-white">
              <p className="text-lg leading-relaxed">
                Your phone is the ultimate video editor. Record, edit, and publish pro-level video with{' '}
                <span className="text-yellow-400 font-bold">EditAura</span>{' '}
                Captions App.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-8 border-yellow-400 shadow-lg max-w-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-8">
                {/* Rating */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800">4.9<span className="text-2xl text-gray-600">/5</span></div>
                  <p className="text-sm text-gray-600">based on 6.7k reviews</p>
                </div>


                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800">8M</div>
                  <p className="text-sm text-gray-600">User around the world</p>
                </div>

                <img src="/QR.png" alt="" />
              </div>
            </div>

            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-900 hover:shadow-lg active:scale-95 flex items-center space-x-2">
              <span>DOWNLOAD THE APP</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <img 
                src="mockup.png" 
                alt="EditAura Mobile App" 
                className="w-90 h-auto transition-all duration-300 group-hover:shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-white text-3xl md:text-4xl font-bold">
            VIDEOS SO GOOD THEY'LL THINK
          </h3>
          <h3 className="text-white text-3xl md:text-4xl font-bold mt-2">
            YOU'VE OUTSOURCED THEM.
          </h3>
        </div>

        {/* Trusted By Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-yellow-400 text-2xl font-semibold">Trusted By</h3>
          </div>
          
          {/* Scrolling Logo Container */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {companyLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '150px' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-auto object-contain opacity-70 cursor-pointer transform transition-all duration-300 hover:opacity-100 hover:scale-110"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '150px' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-auto object-contain opacity-70 cursor-pointer transform transition-all duration-300 hover:opacity-100 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;