import ProductContent from '@/components/ProductDetails';

export const generateMetadata = async ({ params : { id } }: { params: { id: string } }) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();

    return {
      title: product.title,
      description: product.description,
    };
};

export default async function ProductDetails({ params }: { params: { id: string } }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`, {
      next: { revalidate: 3600 }
    });

    const product = await res.json();
    return <ProductContent product={product} />;  
};