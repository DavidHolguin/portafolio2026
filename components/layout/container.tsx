import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
  size?: "default" | "narrow" | "wide";
}

export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-[1200px]",
        size === "wide" && "max-w-[1400px]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
