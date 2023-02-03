import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Produt Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="pb-2">
        <Link href="/">back to products</Link>
      </div>
      <div className='flex flex-row gap-4 justify-between'>
        <Image 
          src={product.image}
          alt={product.name}
          width={640}
          height={640}
        ></Image>
        <div className='flex flex-row container font-semibold gap-1 text-lg justify-between'>
          <div className='flex flex-col gap-1'>
            <span className='text-2xl'>{product.name}</span>
            <span>Category: {product.category}</span>
            <span>Brand: {product.brand}</span>
            <span>{product.rating} of {product.numReviews} reviews</span>
            <span>Description: {product.description}</span>
          </div>
          <div className='flex flex-col max-h-44 py-4 gap-4 px-6 w-2/5 rounded-md  border-gray-300 border-solid border'>
            <div className='flex justify-between'>
              <span>Price</span>
              <span>${product.price}</span>
            </div>
            <div className='flex justify-between'>
              <span>Status</span>
              <span>In Stock</span>
            </div>
            <button className='primary-button w-full'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
        
    </Layout>
  );
}