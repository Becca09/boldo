import * as React from "react";
import { UrlObject } from "url";
import Link from "next/link";
import clsx from "clsx";

// const variants = {
//   primary: "bg-primary-100 ",
//   secondary: "bg-primary-50 ",
//   outline: "bg-transparent border border-primary-100 text-primary-100",
// };

// const sizes = {
//   xs: "py-2 px-3 md:px-4 xl:px-5 text-[13px]",
//   sm: "py-2 px-4 md:px-6 text-sm",
//   md: "py-2 px-6 md:px-10 text-[15px]",
//   lg: "py-3 px-8 lg:px-12 text-lg",
// };

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: React.ReactElement }
  | { endIcon: React.ReactElement; startIcon?: React.ReactElement }
  | { endIcon?: undefined; startIcon?: undefined };

export type LinkOrButtonProps = {
  type?: "button" | "submit" | "reset";
  // variant?: keyof typeof variants;
  // size?: keyof typeof sizes;
  isLoading?: boolean;
  isDisable?: boolean;
  isFull?: boolean;
  onClick?: () => void;
  href?: string | UrlObject;
  className?: string;
  children: React.ReactNode;
} & IconProps;

export const LinkOrButton: React.FC<LinkOrButtonProps> = ({
  type = "button",
  href = "",
  className = "",
  // variant = "primary",
  // size = "md",
  onClick,
  isFull = true,
  isDisable = false,
  isLoading = false,
  startIcon,
  endIcon,
  children,
  ...props
}) => {
  const Tag = href ? Link : "button";

  return (
    <Tag
      disabled={isDisable || isLoading}
      href={href}
      type={type}
      className={clsx(
        "flex items-center text-center outline-none border border-transparent overflow-hidden hover:scale-105 relative justify-center gap-3 py-[8px] rounded font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-20",
        isFull && "w-full",
        // variants[variant],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {isLoading && <h1 className="text-current text-black">loading</h1>}
      <div className="flex items-center justify-center">
        {!isLoading && startIcon}
        <span className="text-center">{children}</span> {!isLoading && endIcon}
      </div>
    </Tag>
  );
};
