import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import BaseLayout from "../../layout/BaseLayout";
import { IoIosArrowForward } from "react-icons/io";
import { FaPen } from "react-icons/fa";

const groupBlogsByMonth = (blogs) => {
  const groupedBlogs = {};

  blogs.forEach((blog) => {
    const postDate = new Date(blog.publishedAt);
    const monthYearKey = `${postDate.getFullYear()}-${postDate.getMonth() + 1}`; // e.g., "2024-10"

    if (!groupedBlogs[monthYearKey]) {
      groupedBlogs[monthYearKey] = [];
    }
    groupedBlogs[monthYearKey].push(blog);
  });

  return groupedBlogs;
};

export default function BlogPage() {
  const groupedBlogs = groupBlogsByMonth(allBlogs);

  return (
    <BaseLayout>
      <section className="my-16 bg-gradient-to-b from-white to-white via-yellow-100">
        {/* <h1 className="text-neutral-200 inline-flex text-xl md:text-xl font-bold mb-8 justify-center pl-1 pr-24 py-2 border-b-[1px] border-neutral-400">
  My Blogs
</h1> */}

        <div className="text-center space-y-8">
          <h className="bg-yellow-400 px-12 py-4 rounded-2xl text-lg font-medium">
            প্ৰবন্ধ
          </h>
          <h1 className="font-bold text-4xl py-4">
            প্ৰকাশিত মাহ অনুসৰি প্ৰবন্ধসমূহ
          </h1>
        </div>

        <div className="flex justify-evenly flex-wrap py-12">
          <div className="flex justify-evenly">
            {Object.keys(groupedBlogs).map((monthYear) => {
              const [year, month] = monthYear.split("-");
              const monthName = new Date(year, month - 1).toLocaleString(
                "default",
                { month: "long" }
              );
              return (
                <div className="py-8" key={monthYear}>

                  <div className="flex flex-row justify-evenly flex-wrap px-2">


                    <Link href={`/monthwiseblog/${monthYear}`}>
                      <div className="flex items-center justify-between px-6 py-4 border border-gray-200 rounded-lg bg-white shadow-sm transition-all hover:shadow-lg hover:border-gray-300 my-4 mx-8 w-[22rem]">
                        {/* Icon Section */}
                        <div className="flex items-center justify-center p-4 bg-yellow-50 rounded-full">
                          <FaPen className="text-2xl text-yellow-500" />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col items-center">
                          <h3 className="text-lg font-semibold text-gray-700">{`${monthName} ${year}`}</h3>
                          <p className="text-sm text-gray-500">
                            {groupedBlogs[monthYear].length} blogs
                          </p>
                        </div>

                        {/* Arrow/Icon for Link (optional) */}
                        <div className="text-gray-400">
                          <IoIosArrowForward className="text-2xl font-bold text-yellow-500" />
                        </div>
                      </div>
                    </Link>


                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
