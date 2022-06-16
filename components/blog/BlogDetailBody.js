/* import Blocks from "editorjs-blocks-react-renderer"; */

const BlogBody = ({ item }) => {
  return (
    <div className="relative mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-bobred sm:text-4xl">
          {item.title}
        </h2>
        <p className="mt-4 text-bobgray">Published: {item.date_of_publication}</p>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 text-bobgray">
        <div className="text-lg mx-auto">
          <p className="mt-4">{item.description}</p>
          {/* <Blocks
            data={JSON.parse(item.body)}
            config={{
              code: {
                className: "language-js",
              },
              delimiter: {
                className: "border border-2 w-16 mx-auto",
              },
              embed: {
                className: "border-0",
              },
              header: {
                className: "font-bold text-xl",
              },
              image: {
                className: "w-full max-w-screen-md",
                actionsClassNames: {
                  stretched: "w-full h-80 object-cover",
                  withBorder: "border border-2",
                  withBackground: "p-2",
                },
              },
              list: {
                className: "list-inside list-disc",
              },
              paragraph: {
                className: "text-base my-3 text-opacity-75",
                actionsClassNames: {
                  alignment: "text-{alignment}", // This is a substitution placeholder: left or center.
                },
              },
              quote: {
                className: "py-3 px-5 italic font-serif",
              },
              table: {
                className: "table-auto",
              },
            }}
          /> */}
          {/* <p className="mt-8 text-xl leading-8">{it}</p> */}
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
