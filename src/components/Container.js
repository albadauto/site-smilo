export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-4 sm:px-5 md:px-6 2xl:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
