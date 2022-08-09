import { useState, useEffect } from 'react';

const useWindowDimension = () => {
    const [width, setWidth] = useState(undefined);
    const [height, setHeight] = useState(undefined);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });
  
    return {width, height};
}

export default useWindowDimension;