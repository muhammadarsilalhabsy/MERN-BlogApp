import { RxCross2 } from "react-icons/rx";
const Categories = ({ name }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mr-2 bg-gray-200 px-2 py-1 rounded-md border-black border-[0.15px]">
      <p className="text-sm text-gray-700">{name}</p>
      <RxCross2 className="text-white hover:text-black bg-black hover:bg-red-500  rounded-full p-1 text-2xl cursor-pointer" />
    </div>
  );
};

export default Categories;
