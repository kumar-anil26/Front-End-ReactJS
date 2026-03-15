import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handlerReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Let find minutes, second and milisecond
  // Here 1 minutes == 60*1000 milisecond
  const minutes = Math.floor((time / 60000) % 60)
    .toString()
    .padStart(2, 0);
  const second = Math.floor((time / 1000) % 60)
    .toString()
    .padStart(2, 0);
  const milisecond = Math.floor((time / 10) % 100)
    .toString()
    .padStart(2, 0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
      console.log(time);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div className="flex min-h-full justify-center">
      <div className="flex flex-col items-center p-6 rounded-xl bg-emerald-400 m-10 shadow-lg shadow-green-600 border-orange-600 border-4">
        <h1 className="text-4xl font-bold shadow-lg p-4 mb-4 text-blue-800 rounded-xl border-l-orange-600 border-r-orange-600 border-l-8 border-r-8">
          STOP WATCH
        </h1>
        <div className="text-5xl font-bold">
          {minutes} : {second} : {milisecond}
        </div>
        <div className="w-fit flex m-8 gap-8">
          <button
            className="shadow-lg shadow-lime-800 p-[7px_20px] rounded-xl font-bold hover:bg-green-400 "
            onClick={() => setIsRunning(true)}
          >
            Start
          </button>
          <button
            className="shadow-lg shadow-lime-800 p-[7px_20px] rounded-xl font-bold hover:bg-green-400 "
            onClick={() => setIsRunning(false)}
          >
            Stop
          </button>
          <button
            className="shadow-lg shadow-lime-800 p-[7px_20px] rounded-xl font-bold hover:bg-green-400 "
            onClick={handlerReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
