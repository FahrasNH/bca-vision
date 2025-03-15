interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  rounded?: string;
}

const Skeleton = ({
  className = "",
  height = "100%",
  width = "100%",
  rounded = "rounded-3xl",
}: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-secondary ${rounded} ${className}`}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
        width: typeof width === "number" ? `${width}px` : width,
      }}
    />
  );
};

export default Skeleton;
