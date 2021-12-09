import ContentfulImage from "./contentful-image";
import Link from "next/link";
import cn from "classnames";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={1200}
      height={800}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200 rounded": slug,
      })}
      src={url}
    />
  );

  return (
    <div className='sm:mx-0 text-center'>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
