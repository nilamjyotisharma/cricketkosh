import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import BaseLayout from "../../layout/BaseLayout";
import { formatDate } from "./[slug]/page";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <BaseLayout>
      <section className="my-16 bg-gradient-to-b from-white to-white via-yellow-100">
        {/* <h1 className="text-neutral-200 inline-flex text-xl md:text-xl font-bold mb-8 justify-center pl-1 pr-24 py-2 border-b-[1px] border-neutral-400">
          My Blogs
        </h1> */}

        <div className='text-center space-y-8'>
          <h className='bg-yellow-400 px-12 py-4 rounded-2xl text-lg font-medium'> প্ৰবন্ধ</h>
          <h1 className='font-bold text-4xl py-4'>শীৰ্ষ প্ৰবন্ধসমূহ</h1>
        </div>
        <hr/>

        <div className="flex justify-evenly flex-wrap">
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
          href={`/blog/${post.slug}`} key={post.slug}
          className="block bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 w-[22rem] m-8"
        >

                {/* Tag Section */}
                <div className="relative bg-white p-4">
                  <div className="absolute top-4 -left-8 bg-yellow-100 text-yellow-600 font-medium text-sm rounded-lg px-3 py-1 z-10">
                    {post.category || "Cricket"}
                  </div>

                  {/* Image */}
                  <img
                    src={post.image}
                    alt="Post Thumbnail"
                    className="object-cover w-full h-48 rounded-lg shadow-xl translate-x-16 mt-12 mb-6 hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mt-2">
                    {post.summary}
                  </p>

                  {/* Author and Reading Time */}
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
                    <div>
                      <span className="bg-yellow-100 text-yellow-600 font-medium text-xs rounded-full px-3 py-1">
                        {post.author || "Cricketkosh Team"}
                      </span>
                    </div>
                    <span>
                      {formatDate(post.publishedAt) || "Unavailable"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </BaseLayout>
  );
}
