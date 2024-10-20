"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';





const NavBar = () => {
    const pathname = usePathname();
  return (
    <>


        <div className=''>
            <div>
                <ul className='flex justify-between text-neutral-700 md:mx-0 items-center pb-3 px-16 font-medium pt-4'>

                    <div>
                    <Link href="/">
                    
                    <div className='px-4 bg-white rounded-xl text-right flex space-x-2 text-yellow-500'>
                        {/* <Image src='/logo2.png' width={40} height={40} alt='Image not found' className='rounded-xl drop-shadow-2xl' /> */}

                        <div className='flex flex-col justify-end drop-shadow-xl'>
                        <h className='text-xl font-extrabold'>CRICKETKOSH.COM</h>
                        <p className='text-xs'>Its all about cricket</p>
                        </div>
                    
                    </div>
                    
                    </Link>

                    </div>

                    <div className='flex space-x-12 px-4 items-center'>

                    <Link href="/"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>মুখ্যপৃষ্ঠা</li></Link>
                    <Link href="/editorial"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/editorial' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>সম্পাদকীয়</li></Link>
                    <Link href="/review"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/review' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>পৰ্য্যালোচনা</li></Link>
                    <Link href="/monthwiseblog"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/monthwiseblog' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>এই সংখ্যাৰ বিশেষ</li></Link>
                    <Link href="/quiz"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/quiz' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>কুইজ</li></Link>
                    <Link href="/blog"><li className={`hover:text-black animate-bounce hover:scale-105 duration-300 drop-shadow-2xl text-black px-8 py-2 rounded-lg shadow-lg bg-yellow-400 ${pathname === '/blog' ? 'scale-110 drop-shadow-lg' : ''} hover:scale-105`}>প্ৰবন্ধসমূহ</li></Link>
                    
                    </div>
                    

                    

                </ul>
            </div>
        </div>


    </>
    
  )
}

export default NavBar