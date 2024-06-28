import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  /* Get the current pathname from the location */
  const { pathname } = useLocation();
  
  /* Scroll to the top of the page whenever the pathname changes */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  /* This component does not render anything */
  return null;
}

export default ScrollToTop;