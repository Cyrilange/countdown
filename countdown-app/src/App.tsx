import { useState, useEffect, useRef } from "react";
import Cube from "./components/Cube";
import { FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "8",
    hours: "23",
    minutes: "55",
    seconds: "41",
  });

  // on stocke le nombre total de secondes dans une ref (pas re-rendue à chaque render)
  const totalSecondsRef = useRef<number>(
    parseInt(timeLeft.days) * 86400 +
      parseInt(timeLeft.hours) * 3600 +
      parseInt(timeLeft.minutes) * 60 +
      parseInt(timeLeft.seconds)
  );

  const countDown = (totalSeconds: number): TimeLeft => {
    if (totalSeconds <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      totalSecondsRef.current -= 1;

      setTimeLeft(countDown(totalSecondsRef.current));

      if (totalSecondsRef.current <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[url('./images/bg-stars.svg')] bg-center bg-no-repeat flex flex-col items-center justify-center font-redhat">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 tracking-widest">
        We're launching soon
      </h1>
      <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 mt-8 sm:mt-19.5 mb-8 sm:mb-19">
        <Cube value={timeLeft.days} label="Days" />
        <Cube value={timeLeft.hours} label="Hours" />
        <Cube value={timeLeft.minutes} label="Minutes" />
        <Cube value={timeLeft.seconds} label="Seconds" />
      </div>

      {/* Ce wrapper remplit tout l'écran grâce à min-h-screen du parent */}
      <img
        src="./images/pattern-hills.svg"
        alt="hills"
        className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[250px] lg:h-[350px] object-cover z-0"
      />

      <ul className="fixed bottom-30 left-0 inset-x-0 z-10 flex items-center justify-center gap-3 p-4">
        <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white opacity-20 cursor-pointer hover:text-[#fb5e84] transition-colors duration-300 hover:opacity-100">
          <FaFacebook />
        </li>
        <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white opacity-20 cursor-pointer hover:text-[#fb5e84] transition-colors duration-300 hover:opacity-100">
          <FaPinterest />
        </li>
        <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white opacity-20 cursor-pointer hover:text-[#fb5e84] transition-colors duration-300 hover:opacity-100">
          <FaInstagram />
        </li>
      </ul>
    </div>
  );
}
