interface Props {
  percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {
  return (
    <div>
      <div className="flex justify-between my-5">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          00:00
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          00:00
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className={`bg-green-600 h-2 rounded-full`}
          style={{ width: percentage + `%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
