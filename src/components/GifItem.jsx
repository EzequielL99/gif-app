export default function GifItem({ url, title }) {
  return (
    <li>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <img src={url} alt={title} className="w-full h-64 object-cover" />
        <p className="p-2 text-sm text-gray-300">{title || 'GIF sin titulo'}</p>
      </div>
    </li>
  );
}
