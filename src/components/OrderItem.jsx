import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';

import cerrar from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product);
	};

	const {
		title,
		price,
		images: [image1],
	} = product;
	return (
		<div className='OrderItem'>
			<figure>
				<img src={image1} alt={title} />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src={cerrar} alt='close' onClick={() => handleRemove(product)} />
		</div>
	);
};

export default OrderItem;
