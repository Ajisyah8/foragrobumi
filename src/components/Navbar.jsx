import React from 'react';

function Navbar() {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
                <img
                    src="https://placehold.co/100x50"
                    alt="Narmada Botanic Garden logo with a sunflower"
                    className="h-12"
                />
                <div className="ml-2">
                    <h1 className="text-green-600 text-xl font-bold">Narmada</h1>
                    <p className="text-gray-500 text-xs">BOTANIC GARDEN</p>
                </div>
            </div>

           
            <div className="flex flex-grow justify-center space-x-11 text-sm text-blue-600">
                <a href="#" className="hover:text-green-600">Beranda</a>
                <a href="#" className="hover:text-green-600">Events</a>
                <a href="#" className="hover:text-green-600">Booking</a>
            </div>

       
            <div className="text-sm text-blue-600">
                <a href="#" className="hover:text-green-600">About Us</a>
            </div>
        </div>
    );
}

export default Navbar;
