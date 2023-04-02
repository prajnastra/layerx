import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";

import ProgressBar from "./ProgressBar";

const PlayerControls = () => {
  return (
    <div>
      <ProgressBar percentage={50} />

      <div className="flex my-10 space-x-10 justify-center">
        <div className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <FaStepBackward className="w-8 h-9" />
        </div>

        <div className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <FaPlay className="w-8 h-9" />
        </div>

        <div className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <FaStepForward className="w-8 h-9" />
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
