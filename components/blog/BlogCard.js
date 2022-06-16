import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ post }) => {
  return (
    <div
      key={post.title}
      className="flex flex-col rounded-lg shadow-lg hover:shadow-2xl overflow-hidden"
    >
      <div className="flex-shrink-0 h-48 relative">
        <Image
          objectFit="cover"
          layout="fill"
          src={`https://epduker.headwaymakers.hu/assets/${post.thumbnail.id}`}
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a className="block">
              <p className="text-lg font-medium mb-2 text-epgreen hover:underline">
                {post.title}
              </p>
              <p className="text-base  text-gray-900">{post.intro}</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
