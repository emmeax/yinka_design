import { stagger } from "motion/react";

/** @type {(staggerDelay?: number) => import('motion/react').Variants} */
export const containerVariants = (staggerDelay = 0.3) => ({
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            delayChildren: stagger(staggerDelay),
        },
    },
});

/** @type {import('motion/react').Variants} */
export const itemVariants = {
    hidden: {
        opacity: 0,
        y: 150,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
        },
    },
};

/** @type {import('motion/react').Variants} */
export const imageClipUpVariants = {
    hidden: {
        clipPath: "inset(100% 0 0 0)",
    },
    visible: {
        clipPath: "inset(0% 0 0 0)",
        transition: {
            duration: 1.2,
        },
    },
};

/** @type {import('motion/react').Variants} */
export const navbarVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

/** @type {import('motion/react').Variants} */
export const carouselItemVariants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

/** @type {import('motion/react').Variants} */
export const bounceVariants = (y = [10, -10]) => ({
    hidden: false,
    visible: {
        y,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

/** @type {(initialY: string, targetY: string) => import('motion/react').Variants} */
export const arrowScrollVariants = (initialY, targetY) => ({
    hidden: { y: initialY },
    visible: {
        y: targetY,
        transition: {
            type: "spring",
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1.5,
        },
    },
});

/** @type {(duration?: number) => import('motion/react').Variants} */
export const slideUpVariants = (duration = 1) => ({
    hidden: { opacity: 0, y: "100%" },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration,
        },
    },
});

/** @type {import('motion/react').Variants} */
export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};
