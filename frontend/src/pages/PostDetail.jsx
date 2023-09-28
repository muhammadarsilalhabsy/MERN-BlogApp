import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import Comment from "../components/Comment";

const PostDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-h1 md:text-3xl">10 Keajaiban dunia</h1>
          <div className="flex items-center justify-center space-x-2 ">
            <BiEditAlt />
            <RiDeleteBin5Line />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 md:mt-4 text-sm md:text-base text-gray-500">
          <p>@m19y-info</p>
          <div className="flex space-x-4">
            <p>02/09/2001</p>
            <p>20:45</p>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/1080x750?flowers"
          alt="detail-image-post"
          className="w-full h-[400px] mx-auto mt-8 object-cover"
        />
        <div className="mt-8">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur nihil vero quo quod fugit iusto porro sint. Ad ipsa
            distinctio libero velit eligendi ipsam eum soluta deleniti
            inventore? Provident, nostrum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati laudantium, eaque deleniti,
            odit quae voluptate odio amet dolorum architecto quaerat cum.
            Laboriosam assumenda minus tempora soluta, perspiciatis deserunt
            quod libero fugiat cum similique adipisci ducimus molestiae veniam
            maxime eos eaque quaerat veritatis harum qui blanditiis? Facere
            tenetur facilis, dolorem consectetur aliquam quis nesciunt, tempora,
            nihil minima veniam atque. Illum quia impedit ab harum ratione.
            Adipisci placeat debitis, quisquam commodi molestias est, rem fugiat
            neque minima autem labore ipsum ex laborum, voluptatem repellendus
            aliquid recusandae numquam eveniet quo molestiae laudantium rerum?
            Veritatis laborum, necessitatibus nemo at quis, accusamus eveniet
            delectus sunt impedit ipsum ex est nobis dolorum dolor. Praesentium
            nostrum placeat iste obcaecati eveniet, ducimus dolorum totam nemo
            architecto error sint voluptate cumque atque eum repudiandae
            pariatur officiis. Dolorem nostrum laborum labore sunt aut maiores
            dolorum ut ipsam porro impedit assumenda nesciunt officiis fuga
            nihil, eligendi nemo tempore magnam sit, qui totam deserunt
            veritatis eaque eum iure? Maiores harum repellendus accusamus
            blanditiis. Est ut odit tenetur vitae ipsum impedit amet repudiandae
            harum fuga repellat eligendi blanditiis id hic eius quis laborum
            ipsa, consequatur, possimus tempora. Animi obcaecati delectus
            asperiores sint enim. Alias tempore, illo quam eos consequuntur
            debitis ullam dolorum nulla.
          </p>
        </div>

        <div className="mt-8 flex space-x-4 font-semibold items-center">
          <h3>Categories :</h3>
          <div className="flex items-center justify-center space-x-2">
            <p className="bg-gray-400 shadow-lg px-3 py-[0.15rem] rounded-full">
              Tech
            </p>
            <p className="bg-gray-400 shadow-lg px-3 py-[0.15rem] rounded-full">
              AI
            </p>
            <p className="bg-gray-400 shadow-lg px-3 py-[0.15rem] rounded-full">
              Nature
            </p>
          </div>
        </div>

        {/* comments */}
        <div className="mt-8 bg-gray-200 p-4 rounded-lg">
          <h3 className="font-semibold my-2">Comments :</h3>
          <Comment />
          <Comment />
          <Comment />
          <div className="flex flex-wrap w-full mt-4">
            <input
              type="text"
              placeholder="Write a comment..."
              className="w-full md:w-11/12 px-4 py-3 outline-none md:rounded-l-md"
            />
            <button className="px-4 py-3 bg-black text-white md:rounded-r-md w-full md:w-1/12 font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetail;
