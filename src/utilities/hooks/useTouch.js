// React
import { useEffect, useState } from 'react';

// Utilities
import { detectBrowser } from 'utilities';

const useTouch = () => {
    const [touch, setTouch] = useState(false);
    useEffect(() => {
        setTouch(detectBrowser.touch());
    }, []);
    return touch;
};

export default useTouch;
