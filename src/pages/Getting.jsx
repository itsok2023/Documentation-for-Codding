// About.jsx
import Listcards from "../getting/Listcards";
import Listcards1 from "../getting/Listcards1";
import Listcards2 from "../getting/Listcards2";

export default function Getting() {
  return (
    <div className=" gap-4 flex flex-col justify-center  bg-white my-1 lg:ml-20 lg:mr-20 mt-20">
        <div><Listcards></Listcards></div>
        <div><Listcards1></Listcards1></div>
        <div><Listcards2></Listcards2></div>
    </div>
  );
}
