const BlogBody = ({ item }) => {
  return (
    <div className="relative mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-bobred sm:text-4xl">
          {item.title}
        </h2>
        <p className="mt-4 text-bobgray">
          Megjelent: {item.date_of_publication}
        </p>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 text-bobgray">
        <div className="text-lg mx-auto">
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: item.body }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
