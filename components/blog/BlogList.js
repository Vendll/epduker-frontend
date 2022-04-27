import BlogCard from "./BlogCard";

const BlogList = ({ posts }) => {
  return (
    <div className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:pt-24 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-epgray sm:text-4xl">
            Blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-epgray/70 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;