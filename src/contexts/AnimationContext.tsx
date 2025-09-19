"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextType {
  isAnimationPaused: boolean;
  pauseAnimation: () => void;
  resumeAnimation: () => void;
  getOrbitClass: () => string;
  getCounterRotateClass: () => string;
  hoveredIcon: string | null;
  setHoveredIcon: (icon: string | null) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
  children,
}) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const pauseAnimation = () => {
    setIsAnimationPaused(true);
  };

  const resumeAnimation = () => {
    setIsAnimationPaused(false);
  };

  const getOrbitClass = () => {
    return isAnimationPaused ? "animate-orbit-paused" : "animate-orbit";
  };

  const getCounterRotateClass = () => {
    return isAnimationPaused
      ? "animate-counter-rotate-paused"
      : "animate-counter-rotate";
  };

  return (
    <AnimationContext.Provider
      value={{
        isAnimationPaused,
        pauseAnimation,
        resumeAnimation,
        getOrbitClass,
        getCounterRotateClass,
        hoveredIcon,
        setHoveredIcon,
      }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
