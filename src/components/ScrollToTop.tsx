import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }: any) {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
  }, [location]);

  return <>{children}</>;
}

export default ScrollToTop;