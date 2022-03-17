import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className='main-container'>
			<div className='ProductList'>
				{products.map((product) => {
					const { id } = product;
					return <ProductItem product={product} key={id} />;
				})}
			</div>
		</section>
	);
};

export default ProductList;
