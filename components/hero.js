export default function Hero({ title, subtitle, link }) {
  return (
    <div className="pt-20 pl-5 pr-5 pb-5 border-1 shadow-lg m-5">
      <h2 className="header-h1">{title} </h2>
      <div className="header-h2">{subtitle}</div>
      <div className="flex justify-end">
        <a className="primary-button" href={link ? link : ''}>
          know more
        </a>
      </div>
    </div>
  );
}
