export default function GifItem({url, title}) {
  return (
    <li>
      <div className="card">
        <img src={url} alt={title} width="200" height="200" />
        <h3>{title}</h3>
      </div>
    </li>
  );
}
