import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addCartImg from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const {
		price,
		title,
		images: [image1],
	} = product;

	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};
	return (
		<div className='ProductItem'>
			<img src={image1} alt={title} />
			<div className='product-info'>
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addCartImg} alt='' />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
