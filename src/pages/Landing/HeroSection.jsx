// import React from "react";
// import { Link } from "react-router-dom";
// import kekeImage from "../../assets/images/keke.png";

// const HeroSection = () => {
//   return (
//     <section className="min-h-[80vh] flex items-center bg-white">
//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-4 w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
//           {/* LEFT: Text */}
//           <div className="text-gray-900">
            
//             <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
//               Book a keke or Find Your Next Home in Ughelli
//             </h1>

//             <div className="mt-8 flex gap-4">
//               <Link
//                 to="/register"
//                 className="px-6 py-3 rounded-md bg-[var(--primary-color)]
//                 text-white font-medium hover:opacity-90"
//               >
//                 Get Started
//               </Link>

//               <Link
//                 to="/"
//                 className="px-6 py-3 rounded-md border border-gray-900
//                 text-gray-900 hover:bg-gray-900 hover:text-white transition"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT: Image */}
//           <div className="relative">
//             <img
//               src={kekeImage}
//               alt="App preview"
//               className="rounded-xl w-full max-w-md ml-auto"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from "react";
import { Link } from "react-router-dom";
import kekeImage from "../../assets/images/keke.png";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* IMAGE — shows first on mobile */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={kekeImage}
              alt="App preview"
              className="rounded-xl w-full max-w-md"
            />
          </div>

          {/* TEXT — shows under image on mobile */}
          <div className="order-2 md:order-1 text-gray-900">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Book a keke or Find Your Next Home in Ughelli
            </h1>

            <div className="mt-8 flex gap-4">
              <Link
                to="/register"
                className="px-6 py-3 rounded-md bg-[var(--primary-color)]
                text-white font-medium hover:opacity-90"
              >
                Get Started
              </Link>

              <Link
                to="/"
                className="px-6 py-3 rounded-md border border-gray-900
                text-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
