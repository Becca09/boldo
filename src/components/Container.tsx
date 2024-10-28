import React, { useMemo, ReactNode } from 'react';

interface ContainerProps {
  disableGutters?: boolean;
  maxWidth?: "2xl" | "xl" | "lg" | "md" | "sm" | false;
  backgroundColor?: "black" | "white";
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ disableGutters = false, maxWidth = "lg", backgroundColor = "white", children }) => {
  const maxWidthClass = useMemo(() => {
    switch (maxWidth) {
      case "2xl":
        return "max-w-screen-2xl";
      case "xl":
        return "max-w-screen-xl";
      case "lg":
        return "max-w-screen-lg";
      case "md":
        return "max-w-screen-md";
      case "sm":
        return "max-w-screen-sm";
      default:
        return "max-w-screen-lg";
    }
  }, [maxWidth]);

  const containerClasses = useMemo(() => {
    const baseClasses = [
      "w-full",
      "box-border",
      "mx-auto",
      disableGutters ? "" : "px-4 md:px-6 sm:px-4",
      maxWidthClass,
    ];

    return baseClasses.filter(Boolean).join(" ");
  }, [disableGutters, maxWidthClass]);

  const containerStyles = useMemo(() => ({
    backgroundColor: backgroundColor === "black" ? "#000" : "transparent",
  }), [backgroundColor]);

  return (
    <div className={containerClasses} style={containerStyles}>
      {children}
    </div>
  );
};

export default Container;
