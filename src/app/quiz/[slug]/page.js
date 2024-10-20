import { notFound } from 'next/navigation';
// import { Mdx } from 'app/components/mdx';
import { Mdx } from '../../components/mdx';
import { allQuizzes } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { Suspense } from 'react';
import BaseLayout from '../../../layout/BaseLayout';
import { FaCalendarDays } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { FaUserAlt } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import SmallCard from '../../components/smallCard';

export const dynamic = 'force-static';


export async function generateMetadata({ params }) {
  const post = allQuizzes.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }


  const {
    title,
    publishedAt: publishedTime,
    summary: summary,
    image,
    slug,
  } = post;
  // const ogImage = image
  //   ? `http://localhost:3000${image}`
  //   : `http://localhost:3000/og?title=${title}`;

  return {
    title,
    summary,
    openGraph: {
      title,
      summary,
      type: 'article',
      publishedTime,
      url: `http://localhost:3000/blog/${slug}`,
      images: [
        // {
        //   url: ogImage,
        // },
      ],
    },
  };
}

export function formatDate(date) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}


export default function Blog({ params }) {
  const post = allQuizzes.find((post) => {
    if(post.slug === params.slug){
      return post;
    }
  });

  if (!post) {
    notFound();
  }


  const getAvataaarsAvatar = (author) => {
    // Generate a random number based on the author's name to pick different attributes
    const randomIndex = author
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 10;
  
    // Arrays of different avatar options
    const topTypes = [
      "ShortHairShortWaved",
      "LongHairStraight",
      "LongHairBun",
      "ShortHairDreads02",
      "Hat",
      "ShortHairFrizzle",
      "ShortHairTheCaesar",
    ];
  
    const hairColors = [
      "BrownDark",
      "Blonde",
      "Black",
      "Red",
      "Brown",
      "PastelPink",
    ];
  
    const clotheTypes = [
      "Hoodie",
      "BlazerShirt",
      "BlazerSweater",
      "ShirtCrewNeck",
      "ShirtScoopNeck",
      "ShirtVNeck",
    ];
  
    const eyeTypes = [
      "Happy",
      "Surprised",
      "Wink",
      "Squint",
      "Cry",
    ];
  
    const eyebrowTypes = [
      "Default",
      "Angry",
      "RaisedExcited",
      "SadConcerned",
      "FlatNatural",
    ];
  
    const mouthTypes = [
      "Smile",
      "Sad",
      "Serious",
      "Tongue",
      "Grimace",
    ];
  
    // Pick attributes based on the randomIndex
    const topType = topTypes[randomIndex % topTypes.length];
    const hairColor = hairColors[randomIndex % hairColors.length];
    const clotheType = clotheTypes[randomIndex % clotheTypes.length];
    const eyeType = eyeTypes[randomIndex % eyeTypes.length];
    const eyebrowType = eyebrowTypes[randomIndex % eyebrowTypes.length];
    const mouthType = mouthTypes[randomIndex % mouthTypes.length];
  
    return `https://avataaars.io/?avatarStyle=Transparent&topType=${topType}&accessoriesType=Blank&hairColor=${hairColor}&facialHairType=Blank&clotheType=${clotheType}&clotheColor=PastelBlue&eyeType=${eyeType}&eyebrowType=${eyebrowType}&mouthType=${mouthType}&skinColor=Light`;
  };
  

  // Get the index of the current post
  const currentIndex = allQuizzes.findIndex((p) => p.slug === post.slug);

  // Get the next post
  const nextPost = currentIndex < allQuizzes.length - 1 ? allQuizzes[currentIndex + 1] : null;

  // Sidebar component to show other posts
  const Sidebar = () => {
    return (
      <div className="flex flex-col space-y-8 bg-white h-full py-36 px-4">
        <h2 className="font-bold text-lg">Recent Posts</h2>
        {allQuizzes.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} className="hover:scale-105 duration-300">
            <SmallCard key={blog.slug} blog={blog} />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <BaseLayout>
      <div className='flex justify-center bg-neutral-50 px-8'>
        <section className='px-4 my-8 w-2/3'>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(post.structuredData),
            }}
          ></script>

          <div className='px-24'>
          <div className='flex'>
            <p className="text-sm rounded-2xl px-4 py-2 bg-gradient-to-br from-yellow-600 to-yellow-300 text-white flex items-center gap-2 md:my-4 font-medium uppercase"> 
              {post.category}
            </p>
          </div>

          <h1 className="font-bold text-neutral-900 text-2xl md:text-[3rem] mt-8 leading-tight">
            <Balancer>{post.title}</Balancer>
          </h1>

          <div className='flex items-center space-x-4 pb-6 pt-2'>
            <p className="text-sm rounded-xl flex items-center gap-2 font-bold">
              <img
                src={getAvataaarsAvatar(post.author)}  // Cute cartoon avatar for the author
                alt={`${post.author}'s avatar`}
                className='w-10 h-10 rounded-full shadow-xl'
              />
              {post.author}
            </p>
            <h2 className="text-neutral-600">•</h2>
            <p className="text-sm rounded-xl flex items-center gap-2 text-neutral-600">
              {formatDate(post.publishedAt)}
            </p>
          </div>
          </div>
          

          <div className='flex justify-center mb-16'>
            <img src={post.image} alt='Image not found' className='rounded-xl drop-shadow-2xl w-5/6 h-[24rem]' />
          </div>

          <div className='px-12'>
            <Mdx code={post.body.code} />
          </div>

          {/* Next button for navigating to the next post */}
          <div className='flex justify-end px-24 mt-12'>
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="text-lg rounded-lg px-8 py-2 bg-gradient-to-br from-yellow-600 to-yellow-300 text-white flex items-center gap-2 md:my-4 font-medium uppercase">
              Next Blog
            </Link>
          )}
          </div>
          
        </section>

        {/* Sidebar for other blog posts */}
        <aside className="w-1/3 p-4 border-gray-300">
          <Sidebar />
        </aside>
      </div>
    </BaseLayout>
  );
}
