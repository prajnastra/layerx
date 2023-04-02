import { invoke } from "@tauri-apps/api/tauri";
import PlayerContainer from "./components/PlayerContainer";
import SongsListContainer from "./components/SongsListContainer";

function App() {
  async function greet() {
    const name = "ABHI";
    await invoke("greet", { name });
  }

  return (
    <div className="h-screen text-white bg-neutral-900 overflow-hidden">
        <div className="container mx-auto p-2 h-full">
            <div className="flex h-full">
                <PlayerContainer />
                <SongsListContainer />
            </div>
        </div>
    </div>
  );
}

export default App;
