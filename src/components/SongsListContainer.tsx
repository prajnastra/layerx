import Header from "./Heading";
import SongListItem from "./SongListItem";

const SongsListContainer = () => {
  const data = Array(50).fill(0);

  return (
    <div className="flex-1 p-1">
      <Header>All Songs</Header>

      <ul className="mt-2 max-h-full overflow-x-scroll scroll-smooth">
        {data.map((_, idx) => (
          <SongListItem label="All Is Well" time="03:40:00" key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default SongsListContainer;
