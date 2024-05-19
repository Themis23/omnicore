function Heading({ className, title, text }) {
  return (
    <div className={`${className} max-50-[rem] mx-auto mb-12 lg:mg-20`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
}

export default Heading;
