import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import BaseLayout from "../../layout/BaseLayout";
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
            <h1 className="font-bold text-4xl py-4">প্ৰকাশিত মাহ অনুসৰি প্ৰবন্ধসমূহ</h1>
          </div>


<div className="flex justify-evenly flex-wrap py-12">
<div>
          {Object.keys(groupedBlogs).map((monthYear) => {
            const [year, month] = monthYear.split("-");
            const monthName = new Date(year, month - 1).toLocaleString(
              "default",
              { month: "long" }
            );
            return (
                <div className="py-8" key={monthYear}>
                  <div className="flex justify-evenly flex-wrap px-24">
                  <Link href={`/monthwiseblog/${monthYear}`}>


                  <div className="flex items-center space-x-2 px-12 py-4 border-2 border-gray-100 rounded-lg bg-white my-4 mx-8 font-bold w-[20rem] justify-between h-18">
                      <div className="p-3 bg-yellow-50 rounded-full">
                        <FaPen className="text-lg text-yellow-500" />
                      </div>
                      <h>{`${monthName} ${year}`}</h>
                      <h>{groupedBlogs[monthYear].length} blogs</h>
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

