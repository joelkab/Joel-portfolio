import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showScrollTop, scrollToTop }) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-cyan-700 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;