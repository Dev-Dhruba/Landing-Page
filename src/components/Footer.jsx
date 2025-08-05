import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 rounded-4xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Follow Us Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Follow Us</h3>
 
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.22.085.339-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            <div className="space-y-3 text-sm text-gray-400">
              <div><a href="#" className="hover:text-white transition-colors">Terms And Conditions</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Privacy</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Cookies</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Licenes Agreement</a></div>
            </div>
            
            <div className="text-sm text-gray-400 pt-4">
              COPYRIGHT © 2025 EDITAURA.
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">AI Tools</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div><a href="#" className="hover:text-white transition-colors">Video Editing</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Recordings</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Background Remove</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Text Adding</a></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Resources</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div><a href="#" className="hover:text-white transition-colors">About Us</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Blogs</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Careers</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Newsroom</a></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Help Center</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div><a href="#" className="hover:text-white transition-colors">Support Center</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Contact Us</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Refund</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Cancel Subscription</a></div>
            </div>
          </div>
        </div>


        <div className="flex justify-center mt-16 h-31">
          <img src="logo.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;