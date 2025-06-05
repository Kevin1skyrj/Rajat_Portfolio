import React from 'react';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 ">
        
        <div className="text-center md:text-left text-sm">
          <p>
            <span>Page created by Rajat Pandey</span>

          </p>
          <p>&copy; {year}. All Rights Reserved.</p>
        </div>

        <div className="flex space-x-10 text-4xl">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default React.memo(Footer);
