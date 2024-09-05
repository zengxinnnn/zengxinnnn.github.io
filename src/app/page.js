import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My Personal Website</h1>
        <p className="mt-4 text-xl">I share my thoughts on technology, life, and more.</p>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="w-full">
          <h2 className="text-2xl font-bold">Recent Blog Posts</h2>
          <ul className="list-disc pl-5 mt-4">
            <li>
              <Link href="/blog/post-1">How I Started My Journey</Link>
            </li>
            <li>
              <Link href="/blog/post-2">5 Tips to Stay Productive</Link>
            </li>
            {/* Add more blog posts here */}
          </ul>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.instagram.com/zengxinnnnnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on Instagram
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://linkedin.com/in/sgzengxin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </main>

      <footer className="row-start-3 text-center mt-8">
        <p>© 2024 by [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}
