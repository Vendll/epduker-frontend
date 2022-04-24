import { Directus } from "@directus/sdk";

function SubCategoryPage({ subcategory, products }) {
  return (
    <>
      <h1>Subcategories</h1>
      <ul>
        <li>{subcategory.title}</li>
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
  /* find subcategory */
  const getSubCategoryData = await directus.items("Subcategory").readByQuery({
    filter: {
      slug: params.alkategoria,
    },
  });

  const subcategory = getSubCategoryData.data[0];
  console.log("=============subcategory=================");
  console.log(getSubCategoryData);
  console.log("====================================");
  /* find products */
  const productData = await directus.items("product").readByQuery({
    filter: {
      category: subcategory.id,
    },
  });
  const products = productData.data;
  return {
    props: {
      subcategory,
      products,
    },
  };
}

export async function getStaticPaths() {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  const subCategoryData = await directus.items("Subcategory").readByQuery({
    fields: ["id", "title", "slug", "category.*"],
  });

  const subcategories = subCategoryData.data;
  console.log("================slug================");
  console.log(subcategories[0].category.slug);
  console.log("====================================");

  return {
    paths: subcategories.map((subcategory) => {
      return {
        params: {
          kategoria: subcategory.category.slug,
          alkategoria: subcategory.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default SubCategoryPage;
