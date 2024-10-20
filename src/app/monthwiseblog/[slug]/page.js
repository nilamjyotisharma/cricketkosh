"use client";
import { allBlogs } from "contentlayer/generated";
import BaseLayout from "../../../layout/BaseLayout";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import Link from "next/link";
import { formatDate } from "../../blog/[slug]/page";

export default function MonthWiseBlogPage() {
  const { slug } = useParams(); // Extract slug from URL

  // Check if slug exists
  if (!slug) return <div>Loading...</div>;

  // Extract year and month from slug (slug format: "2024-10")
  const [year, month] = slug.split("-");

  const monthName = new Date(year, month - 1).toLocaleString("default", { month: "long" });

  // Filter blogs for the selected month and year
  const filteredBlogs = allBlogs.filter((post) => {
    const postDate = new Date(post.publishedAt);
    return (
      postDate.getFullYear() === parseInt(year) &&
      postDate.getMonth() + 1 === parseInt(month) // Adjust for 0-indexed month
    );
  });

  return (



    <BaseLayout>
      <section className="my-16 bg-gradient-to-b from-white to-white via-yellow-100">

        <div className='text-center space-y-8'>
          <h className='bg-yellow-400 px-12 py-4 rounded-2xl text-lg font-medium'>{`${year}`} বৰ্ষৰ {`${monthName}`} মাহৰ সংখ্যা</h>
          <h1 className='font-bold text-4xl py-4'>{`${year}`} বৰ্ষৰ {`${monthName}`} মাহত প্ৰকাশিত প্ৰবন্ধসমূহ</h1>
          
        </div>
        <hr/>

        <div className="flex justify-evenly flex-wrap">
          {filteredBlogs.map((post) => (
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

