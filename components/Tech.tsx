import { techData } from "@/public/contacts";

const Tech = () => {
  return (
    <div className="w-full px-[10px]">
      <div className="w-full bg-amber-400 pt-5  rounded-lg max-w-[81.25rem] mx-auto">
        <h1
          className="text-3xl font-bold text-slate-800 text-center mb-[30px] "
          style={{ WebkitTextStroke: "0.5px #000" }}
        >
          Tech i use
        </h1>
        <div
          className="mx-auto max-w-[1000px] grid  justify-items-center items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(9.37rem, 1fr))",
            gridAutoRows: "minmax(0, 1fr)",
          }}
        >
          {techData.map((technology, index) => (
            <div className="flex flex-col items-center w-20 h-20 " key={index}>
              <div className="text-slate-800 w-[30px]">{technology.icon}</div>
              <p className="font-medium  text-center">{technology.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
