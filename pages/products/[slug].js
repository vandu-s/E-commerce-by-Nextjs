import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../components/Layout';
import { Link } from '@material-ui/core';
import NextLink from 'next/link';
const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div>
        <NextLink href="/" passHref>
          <Link>back to products</Link>
        </NextLink>
      </div>
    </Layout>
  );
};

export default ProductScreen;
