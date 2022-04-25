import { Directus } from "@directus/sdk";

function ProductPage({ product }) {
  return (
    <>
      <h1>{product.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  /* find product */
  const getProductData = await directus.items("product").readByQuery({
    fields: ["*.*.*"],
    filter: {
      slug: params.termek,
    },
  });

  const product = getProductData.data[0];
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  const productsData = await directus.items("product").readByQuery({
    fields: ["*.*.*"],
  });

  const products = productsData.data;

  return {
    paths: products.map((product) => {
      return {
        params: {
          kategoria: product.category.category.slug,
          alkategoria: product.category.slug,
          termek: product.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default ProductPage;
