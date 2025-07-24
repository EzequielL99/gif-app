export default function GifGridItem({ category, key }) {
  return (
    <div key={key}>
      <h3>{category}</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}
