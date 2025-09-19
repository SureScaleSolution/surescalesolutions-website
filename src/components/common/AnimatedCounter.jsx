import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function AnimatedCounter({ value, char, duration = 1 }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (value) => Math.round(value));
    const [hasAnimated, setHasAnimated] = useState(false);

    const startAnimation = () => {
        if (!hasAnimated) {
            setHasAnimated(true);
            const animation = animate(count, value, {
                duration: duration,
                ease: "easeOut",
            });
            return () => animation.stop();
        }
    };

    return (
        <motion.div 
            className="flex items-center justify-center"
            onViewportEnter={startAnimation}
            transition={{delay: 0.5}}
            viewport={{ once: true, amount: 1 }}
        >
            <motion.h3 className="text-[40px] text-primary font-semibold flex items-center ">
                <motion.span>{rounded}</motion.span>
                <span className="text-[40px] text-primary">{char}</span>
            </motion.h3>
        </motion.div>
    );
}
