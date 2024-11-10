import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
 
     
      <div className="text-center md:text-left md:w-1/2">
        <p className="text-sm text-gray-600 mb-2 flex items-center justify-center md:justify-start">
          <span className="text-green-500 mr-2">
            <i className="fas fa-circle"></i>
          </span>
          Let's Discover The Wonders Of Lombok's Agrotourism
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Let’s Explore Now <br />
          And <span className="highlight text-green-500">Discover Nature,</span> <br />
          Beauty In Lombok.
        </h1>
        <p className="text-gray-600 mt-4">
          Don’t Wait, Now’s The Time To Explore Lombok <br />
          And Uncover Its Unique Agrotourism Wonders.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full mr-4 flex items-center">
            Explore Now
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center">
            Booking
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </div>

     
      <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center">
        
   
        <div className="absolute top-0 left-96 bg-white shadow-lg rounded-lg p-2 flex items-center z-10 ml-20 mt-4">
          <img
            src="https://placehold.co/50x50"
            alt="Travel Plan"
            className="w-12 h-12 rounded-full mr-2"
          />
          <div>
            <p className="text-sm font-bold">Travel Plan</p>
            <p className="text-xs text-gray-500">Plan Your Next Traveling</p>
          </div>
        </div>

        
        <div className="relative">
          <img
            src="https://placehold.co/300x400"
            alt="Beautiful landscape of Lombok"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 bg-white shadow-lg rounded-lg p-2 mt-4">
            <ul className="text-sm">
              <li className="flex items-center mb-1">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Best Place
              </li>
              <li className="flex items-center mb-1">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Best Photo
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Best View
              </li>
            </ul>
          </div>
        </div>

   
        <div className="absolute top-16 right-0">
          <img
            src="https://placehold.co/200x300"
            alt="Mountain view in Lombok"
            className="rounded-lg shadow-lg mb-4 mt-6"
          />
          <img
            src="https://placehold.co/200x200"
            alt="Boat on the shore in Lombok"
            className="rounded-lg shadow-lg -mt-20 -ml-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
