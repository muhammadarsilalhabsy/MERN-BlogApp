import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
const Comment = () => {
  return (
    <div className=" bg-white p-2 mt-2 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">username@1233</h2>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <p>02/09/2001</p>
            <p>20:45</p>
          </div>

          <BiEditAlt />
          <RiDeleteBin5Line />
        </div>
      </div>
      <div className="px-2 mt-1 text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptate quod hic sapiente cum architecto, excepturi rerum numquam.
          Autem dicta itaque obcaecati dignissimos maxime laboriosam, suscipit
          doloribus nulla pariatur distinctio.
        </p>
      </div>
    </div>
  );
};

export default Comment;
