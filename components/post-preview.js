import Link from "next/link";
import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5'>
      <CoverImage title={title} slug={slug} url={coverImage.url} />
      <div className='p-5'>
        <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
          <Link href={`/posts/${slug}`}>
            <a className='hover:underline'>{title}</a>
          </Link>
        </h5>
        <div className='text-lg mb-4'>
          <DateComponent dateString={date} />
        </div>
        <p className='font-normal text-gray-700 mb-4'>
          {excerpt.slice(0, 200)}...
        </p>
        {author && <Avatar name={author.name} picture={author.picture} />}
        <Link href={`/posts/${slug}`}>
          <a
            href='#'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'
          >
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
}
