import Image from "next/image";
import BlogBody from "../../components/joboffers/BlogDetailBody";
import Layout from "../../components/Layout";
import { Directus } from "@directus/sdk";

const PostPage = ({ categories, joboffer }) => {
  return (
    <Layout categories={categories}>
      <div className="bg-gray-50 pt-4">
        {/* <div aria-hidden="true" className="relative h-96">
         <Image
            src={`https://epduker.headwaymakers.hu/assets/${joboffer.thumbnail.id}`}
            alt=""
            layout="fill"
            objectFit="contain"
            className="w-full h-96 object-center object-cover"
          /> 
        </div>*/}
        <BlogBody item={joboffer} />
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getStaticProps({ params }) {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  /* find category */
  const categoriesData = await directus.items("Category").readByQuery({
    fields: ["title", "slug", "subcategories.title", "subcategories.slug"],
    limit: -1,
  });
  const categories = categoriesData.data;

  const jobOfferData = await directus.items("job_offering").readByQuery({
    fields: ["*.*.*"],
  });
  const joboffer = jobOfferData.data[0];

  return {
    props: {
      categories,
      joboffer,
    },
  };
}

export async function getStaticPaths() {
  const directus = new Directus("https://epduker.headwaymakers.hu");

  const jobOfferData = await directus.items("job_offering").readByQuery({
    fields: ["*.*.*"],
  });
  const joboffers = jobOfferData.data;

  return {
    paths: joboffers.map((joboffer) => {
      return {
        params: {
          slug: joboffer.slug,
        },
      };
    }),
    fallback: false,
  };
}
