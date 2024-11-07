import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Type = () => {

    const typeRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typeRef.current, {
            strings: ["Souvikkk", "Shushiii", "So-Weak", "So-Big"],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1000,
            loop: true,
            showCursor: true,
        });

        // Cleanup on unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={typeRef} />
}

export default Type