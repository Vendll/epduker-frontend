import { Directus } from "@directus/sdk";

function BrandPage({ brand, products }) {
  return (
    <>
      <ul>
        <li>{brand.title}</li>
      </ul>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps({ params }) {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  /* find brand */
  const brandData = await directus.items("brand").readByQuery({
    filter: {
      slug: params.kategoria,
    },
  });
  const brand = brandData.data[0];
  /* find products of brand */
  const productsData = await directus.items("product").readByQuery({
    filter: {
      brand: brand.id,
    },
  });
  const products = productsData.data;

  return {
    props: {
      brand,
      products,
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
        params: { marka: product.brand.slug },
      };
    }),
    fallback: false,
  };
}

export default BrandPage;
