import { TiTick } from "react-icons/ti";

const ClientStats = ({ classname, paraTextColor, count, text }) => {
  return (
    <div
      className={`py-12 ${classname} flex justify-center items-center flex-1`}
    >
      <div>
        <TiTick
          className='bg-white text-cyan-900 h-10 w-10 rounded-full shadow-2xl'
          size={5}
        />
        <h3 className='text-5xl font-bold block mt-5'>{count}+</h3>
        <p className={`${paraTextColor} text-lg mt-2 block`}>{text}</p>
      </div>
    </div>
  );
};

export default ClientStats;
