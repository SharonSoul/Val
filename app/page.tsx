"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";


// WelcomePage component
const WelcomePage = ({ onWelcomeComplete }: { onWelcomeComplete: () => void }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show message after 1 second
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    // Move to initial page after 5 seconds
    setTimeout(() => {
      onWelcomeComplete();
    }, 5000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {showMessage && (
        <motion.div
          className="text-4xl font-bold text-center py-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome, Mariam. ❤️ <br />
          I have a question for you...
        </motion.div>
      )}
    </div>
  );
};

// Function to get no button text
const getNoButtonText = (noCount) => {
  const phrases = [
    "No",
    "Are you sure??🙄",
    "Really sure?🤔",
    "Are you positive???😶",
    "Please my love...🙏",
    "Just think about it🥺",
    "If you say no, I'll be very sad🙁",
    "I'll be very very sad😕",
    "I'll be very very very sad😓",
    "I'll be very very very very sad😖",
    "Ok fine😡, I'll stop asking...",
    "Just kidding, PLEASE SAY YES🙏",
    "I'll be very very very very very sad🥴",
    "You're breaking my heart😥😥😥"
  ];

  return phrases[noCount % phrases.length];
};

// Animation variants
const animationVariants = [
  { opacity: 0, x: "-100%", y: 0 },
  { opacity: 1, x: 0, y: 0 },
  { opacity: 0, x: "100%", y: 0 },
  { opacity: 1, x: 0, y: 0 },
  { opacity: 0, x: 0, y: "-100%" },
  { opacity: 1, x: 0, y: 0 },
  { opacity: 0, x: 0, y: "100%" },
  { opacity: 1, x: 0, y: 0 },
];

// Page component
const Page = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Added state for modal visibility
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSwitch, setAutoSwitch] = useState(true);   // State for automatic image switching
  const images = [
    {
      src: "/images/1.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/2.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/3.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/4.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/5.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/6.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/7.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/8.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/9.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/10.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/11.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/12.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/13.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/14.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/15.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/16.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/17.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/18.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/19.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/20.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/21.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/22.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/23.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/24.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/25.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/26.jpg",
      caption: "Image 2 Caption"
    },
    {
      src: "/images/27.jpg",
      caption: "Image 3 Caption"
    },
    {
      src: "/images/28.jpg",
      caption: "Image 1 Caption"
    },
    {
      src: "/images/29.jpg",
      caption: "Image 2 Caption"
    },

  ];




  useEffect(() => {
    const interval = setInterval(() => {
      if (autoSwitch) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [autoSwitch, currentIndex]);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16 ">
      {yesPressed ? (
        <>
          <img
            src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.webp"
            alt="Bear Kiss"
          />
          <div className="text-[2rem] font-bold text-center leading-tight md:text-5xl md:leading-snug  bg-gradient-to-tr from-blue-400 to-violet-400 to-red-400  p-1 inline-block text-transparent bg-clip-text">
            Thank you, Mariam! I love you! ❤️
          </div>
          <div className="flex rounded-full mx-auto bg-gradient-to-tr from-violet-400 to-green-400 p-1 shadow-lg max-w-240px my-4">
            <button
              onClick={() => setModalOpen(true)} // Open the modal
              className="flex-1 font-bold md:text-xl bg-white px-6 py-3 rounded-full"
            >
              Show Memories
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-[2rem] text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            Will you be my Valentine?
          </h1>
          <div className="text-center flex flex-wrap justify-center items-center">
            <div className="bg-gray-50 flex flex-col justify-center relative overflow-hidden p-6 mb-4 mx-2">
              <div className="max-w-md mx-auto">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6">
                    <div className="space-y-2">
                      <p
                        className="text-slate-800"
                        style={{ fontSize: noCount * 20 + 16 }}
                        onClick={() => setYesPressed(true)}
                      >
                        Yes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex flex-col justify-center relative overflow-hidden p-6 mb-4 mx-2">
              <div className="max-w-md mx-auto">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6">
                    <div className="space-y-2">
                      <p
                        className="text-slate-800"
                        onClick={() => setNoCount(noCount + 1)}
                      >
                        {noCount === 0 ? "No 😥" : getNoButtonText(noCount)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Image gallery */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-slate-300 focus:outline-none">
          <div className="relative w-full md:w-[40%] mx-auto my-6">
            <div className="relative flex flex-col w-full  border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="text-3xl font-semibold">Our Memories</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setModalOpen(false)} // Close the modal
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">X</span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <div className="h-[500px] md:h-[800px] ">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={`Image ${index + 1}`}
                      className="h-full w-full object-cover absolute"
                      style={{
                        zIndex: currentIndex === index ? 1 : 0,
                        display: currentIndex === index ? "block" : "none"
                      }}
                    />
                  ))}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2">
                    {images[currentIndex].caption}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// App component
const App = () => {
  const [showInitialPage, setShowInitialPage] = useState(false);

  const handleWelcomeComplete = () => {
    setShowInitialPage(true);
  };

  return showInitialPage ? <Page /> : <WelcomePage onWelcomeComplete={handleWelcomeComplete} />;
};

export default App;