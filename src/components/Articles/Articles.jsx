export const Articles = ({ items }) => {
  return (
    <div>
      <h1>Latest articles</h1>
      <ul>
        {items.map(({ objectID, url, title }) => (
          <li key={objectID}>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
