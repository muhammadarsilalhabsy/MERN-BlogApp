import React from "react";

const HomePost = () => {
  return (
    <article className="w-full flex mt-8 space-x-4 ">
      {/* left */}
      <div className="w-[35%] h-[200px] flex items-center justify-center">
        <img
          src="https://source.unsplash.com/600x300?flowers"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-h1 mb-1 md:mb-2">10 Keajaiban dunia</h1>
        <div className="flex mb-2 md:mb-4 text-sm text-gray-500 font-semibold items-center justify-between ">
          <p>@m19y-info</p>
          <div className="flex space-x-4">
            <p>02/09/2001</p>
            <p>20:45</p>
          </div>
        </div>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi
          praesentium explicabo cum similique hic! Distinctio, omnis ipsam
          nostrum dolorum libero nihil tempora nobis ratione dolores commodi,
          voluptas consequuntur ut velit, doloribus optio hic numquam! Vero
          similique placeat corporis itaque, obcaecati sapiente, necessitatibus
          deleniti deserunt, aspernatur tenetur qui magni omnis?
        </p>
      </div>
    </article>
  );
};

export default HomePost;
