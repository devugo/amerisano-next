import { useState, useEffect } from 'react';

const useWindowDimension = () => {
    const [width, setWidth] = useState(undefined);
    const [height, setHeight] = useState(undefined);
    const [loaded, setLoaded] = useState(false);

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

    useEffect(() => {
        if (loaded) {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    }, [loaded])

    useEffect(() => {
        setLoaded(true);
    }, []);
  
    return {width, height};
}

export default useWindowDimension;