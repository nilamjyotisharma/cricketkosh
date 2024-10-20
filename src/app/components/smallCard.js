import { formatDate } from "../blog/[slug]/page";

const SmallCard = ({ blog }) => {
  return (
    <>
      <div className="">


        <div className="px-2 py-2 flex justify-evenly items-center space-x-4">


          <div className="w-1/3">
            <img
              src={blog.image}
              alt="Post Thumbnail"
              className="w-42 h-24 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>


          <div className="flex flex-col items-start w-2/3 pl-2">

            <div className="flex items-center justify-center py-1">

              <p className="text-[0.7rem] rounded-xl flex items-center gap-2 font-bold">
                {blog.author}
              </p>

              <h2 className="text-neutral-600">•</h2>

              <p className="text-[0.7rem] rounded-xl px-4 py-2 flex items-center gap-2 text-neutral-600">
                {formatDate(blog.publishedAt)}
              </p>
              
            </div>

            <div>
                <h1 className="font-semibold text-sm text-neutral-700">{blog.title}</h1>
            </div>

          </div>


        </div>
      </div>
    </>
  );
};

export default SmallCard;
