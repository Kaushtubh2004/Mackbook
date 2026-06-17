import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "/logo.svg";

const Loader = ({ onComplete }) => {
    const loaderRef = useRef();
    const progressRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        let progress = { value: 0 };

        gsap.to(progress, {
            value: 100,
            duration: 2.8,
            ease: "power2.out",
            onUpdate: () => {
                const val = Math.floor(progress.value);

                if (textRef.current) {
                    textRef.current.innerText = `${val}%`;
                }

                gsap.set(progressRef.current, {
                    width: `${val}%`,
                });
            },
            onComplete: () => {
                gsap.to(loaderRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: () => {
                        onComplete();
                    },
                });
            },
        });

        gsap.from(".loader-logo", {
            scale: 0.7,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
        });
    }, [onComplete]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
            <img
                src={logo}
                alt="logo"
                className="loader-logo w-24 md:w-32 mb-10 "
            />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[180px] md:w-[200px] h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                    ref={progressRef}
                    className="h-full bg-white w-0"
                />
            </div>


        </div>
    );
};

export default Loader;