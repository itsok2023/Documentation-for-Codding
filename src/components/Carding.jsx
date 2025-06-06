

export default function Carding(props){
  return (
    <aside className="bg-black text-white p-6 rounded-lg w-5/6 max-w-lg font-mono md:w-250 md:max-w-full ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm">{props.location}</p>
      </div>
      <div className="mt-4">
                <p className="text-green-400">{props.codeingreen1}</p>
        <p className="text-white">{props.codeinwhite1}</p>
                <p className="text-green-400">{props.codeingreen2}</p>
        <p className="text-white">{props.codeinwhite2}</p>
                <p className="text-green-400">{props.codeingreen3}</p>
        <p className="text-white">{props.codeinwhite3}</p>
                <p className="text-green-400">{props.codeingreen4}</p>
        <p className="text-white">{props.codeinwhite4}</p>
                <p className="text-green-400">{props.codeingreen5}</p>
        <p className="text-white">{props.codeinwhite5}</p>
                <p className="text-green-400">{props.codeingreen6}</p>
        <p className="text-white">{props.codeinwhite6}</p>
                <p className="text-green-400">{props.codeingreen7}</p>
        <p className="text-white">{props.codeinwhite7}</p>
                <p className="text-green-400">{props.codeingreen8}</p>
        <p className="text-white">{props.codeinwhite8}</p>
                <p className="text-green-400">{props.codeingreen9}</p>
        <p className="text-white">{props.codeinwhite9}</p>
                <p className="text-green-400">{props.codeingreen10}</p>
        <p className="text-white">{props.codeinwhite10}</p>
                <p className="text-green-400">{props.codeingreen11}</p>
        <p className="text-white">{props.codeinwhite11}</p>
                <p className="text-green-400">{props.codeingreen12}</p>
        <p className="text-white">{props.codeinwhite12}</p>
                <p className="text-green-400">{props.codeingreen13}</p>
        <p className="text-white">{props.codeinwhite13}</p>

      </div>
    </aside>
  );
}
