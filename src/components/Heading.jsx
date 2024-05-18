function Heading({ className, title }) {
  return (
    <div className={`${className} max-50-[rem] mx-auto mb-12 lg:mg-20`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
}

export default Heading;
