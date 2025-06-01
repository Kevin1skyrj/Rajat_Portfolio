import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [backToTopButton, setBackTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackTopButton(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className="fixed bottom-16 right-6 z-[100] h-12 w-12 sm:h-10 sm:w-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <i className="fas fa-chevron-up text-lg sm:text-sm" />
        </button>
      )}
    </>
  );
};

export default React.memo(ScrollToTop);
