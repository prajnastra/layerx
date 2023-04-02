import PlayerControls from "./PlayerControls";

const PlayerContainer = () => {
  const url = "https://via.placeholder.com/300x300.png?text=Thumbnail";

  return (
    <div className="flex-1 p-1 flex align-center flex-col">
      <div className="flex justify-center mb-5 mt-3">
        <img src={url} alt="Thumbnail" className="rounded" />
      </div>

      <PlayerControls />
    </div>
  );
};

export default PlayerContainer;
