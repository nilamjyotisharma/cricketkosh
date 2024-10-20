import Link from "next/link";
import React from "react";
import BaseLayout from "../layout/BaseLayout";
import Span from "./components/span";
import Image from "next/image";
import { FaPen } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FiDivideCircle } from "react-icons/fi";
import { allBlogs } from "contentlayer/generated";
import { allEditorials } from "contentlayer/generated";
import { allReviews } from "contentlayer/generated";
import { formatDate } from "./blog/[slug]/page";
import Capsule from "./components/capsule";

export const metadata = {
  title: "Home | Cricketkosh",
};

const page = () => {
  return (
    <BaseLayout>
      <div className="mt-4 md:mt-8">
        <div className="flex justify-center">
          <Image
            src="/banner.png"
            width={1200}
            height={100}
            alt="Image not found"
            className="rounded-xl drop-shadow-2xl"
          />
        </div>

        <div className="text-[#212123] py-24 bg-gradient-to-b from-white to-white via-yellow-100">
          <div className="text-center space-y-8">
            <h className="bg-yellow-400 px-12 py-4 rounded-2xl text-lg font-medium">
              অণ্বেষণ
            </h>
            <h1 className="font-bold text-4xl py-4">শ্ৰেণী অনুসৰি অন্বেষণ</h1>
          </div>

          <div className="py-8">
            <div className="flex justify-evenly flex-wrap px-24">
              <Capsule
                pColor="yellow-500"
                color="yellow-50"
                icon={FaPen}
                heading="পৰ্য্যালোচনা"
                link="/review"
              />

              <Capsule
                pColor="blue-500"
                color="blue-50"
                icon={FaBookOpen}
                heading="প্ৰবন্ধ"
                link="/blog"
              />
              <Capsule
                pColor="orange-500"
                color="orange-50"
                icon={FaUserPen}
                heading="সম্পাদকীয়"
                link="/editorial"
              />
              <Capsule
                pColor="green-500"
                color="green-50"
                icon={MdQuiz}
                heading="কুইজ"
                link="/quiz"
              />
              <Capsule
                pColor="red-500"
                color="red-50"
                icon={FaBook}
                heading="মাহেকীয়া প্ৰবন্ধ"
                link="/monthwiseblog"
              />
              <Capsule
                pColor="indigo-500"
                color="indigo-50"
                icon={FaPen}
                heading="প্ৰতি সংখ্যাৰ বিশেষ"
                link="/monthwiseblog"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="px-24">
            <div className="text-start space-y-8">
              <h className="bg-yellow-400 px-12 py-4 rounded-2xl text-lg font-medium">
                শীৰ্ষ প্ৰবন্ধ
              </h>
              <h1 className="font-bold text-4xl py-4">
                শেহতীয়াকৈ প্ৰকাশিত প্ৰবন্ধসমূহ
              </h1>
            </div>
            <div className="flex justify-evenly flex-wrap">
              {allBlogs
                .sort(
                  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
                ) // Sort in descending order
                .slice(0, 3) // Take only the first three items
                .map((post) => (
                  <Link
                    key={post.slug} // Use a unique key for each link
                    href={`/blog/${post.slug}`}
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
          </div>
        </div>

        <div className="py-24">
          <div className="px-24">
            <div className="text-start space-y-8">
              <h className="bg-yellow-400 px-12 py-4 rounded-2xl text-lg font-medium">
                শীৰ্ষ সম্পাদকীয়
              </h>
              <h1 className="font-bold text-4xl py-4">
                শেহতীয়াকৈ প্ৰকাশিত সম্পাদকীয়সমূহ
              </h1>
            </div>
            <div className="flex justify-evenly flex-wrap">
              {allEditorials
                .sort(
                  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
                ) // Sort in descending order
                .slice(0, 3) // Take only the first three items
                .map((post) => (
                  <Link
                    key={post.slug} // Use a unique key for each link
                    href={`/editorial/${post.slug}`}
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
          </div>
        </div>

        <div className="">
          <div className="px-24">
            <div className="text-start space-y-8">
              <h className="bg-yellow-400 px-12 py-4 rounded-2xl text-lg font-medium">
                শীৰ্ষ পৰ্য্যালোচনা
              </h>
              <h1 className="font-bold text-4xl py-4">
                শেহতীয়াকৈ প্ৰকাশিত পৰ্য্যালোচনাসমূহ
              </h1>
            </div>
            <div className="flex justify-evenly flex-wrap">
              {allReviews
                .sort(
                  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
                ) // Sort in descending order
                .slice(0, 3) // Take only the first three items
                .map((post) => (
                  <Link
                    key={post.slug} // Use a unique key for each link
                    href={`/review/${post.slug}`}
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
          </div>
        </div>

        <div
          className="bg-cover bg-center py-24"
          style={{
            backgroundImage: "url('/newsbg.png')",
          }}
        >
          <div className="flex justify-center text-center px-44 items-center pt-16 pb-16">
            {/* <div>
            <Image
              className="w-[22rem] h-[30rem] -mt-24 rounded-full"
              src="/profile1.jpeg"
              width={800}
              height={800}
              alt="No image found"
            />
          </div> */}
            <div className="text-center text-[2.5rem] text-neutral-800 font-bold">
              আপোনাৰ ইনবক্সত শ্ৰেষ্ঠ{" "}
              <span className="bg-yellow-500 bg-clip-text text-transparent">
                প্ৰবন্ধ, গল্পসমূহ
              </span>{" "}
              লওক!
              <br />
              যোগাযোগ কৰক <br />
              <br />
              <div className="flex justify-center">
                <Link href={"mailto:nilamjyotisharma2000@gmail.com"}>
                  <button className="text-2xl rounded-2xl px-12 py-4 bg-gradient-to-br from-yellow-600 to-yellow-300 text-white flex items-center gap-2 md:my-4 font-medium uppercase">
                    যোগাযোগ কৰক
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default page;
