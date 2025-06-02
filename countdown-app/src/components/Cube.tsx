import "./cunbe.css";

type CubeProps = {
  value: string | number;
  label: string;
};

export default function Cube({ value, label }: CubeProps) {
  return (
    <div className="flex flex-col items-center ">
      <div className="color-cube w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg flex items-center justify-center shadow-lg ">
        <span className="text-5xl text-[#fb5e84] font-bold tracking-widest">
          {value}
        </span>
      </div>
      <span className="text-white text-xs mt-4 tracking-[0.3em]  uppercase opacity-25">
        {label}
      </span>
    </div>
  );
}
