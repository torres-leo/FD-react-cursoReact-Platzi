import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';

import flecha from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	// const sumaTotal = () => {
	// 	const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
	// 	const suma = state.cart.reduce(reducer, 0);

	// 	return suma;
	// };

	const sumTotal = () => {
		let total = 0;
		state.cart.forEach((product) => {
			total += product.price;
		});
		return total;
	};

	return (
		<aside className='MyOrder'>
			<div className='title-container'>
				<img src={flecha} alt='arrow' />
				<p className='title'>My order/s</p>
			</div>
			<div className='my-order-content'>
				{state.cart.map((itemProduct) => {
					return <OrderItem product={itemProduct} key={`orderItem-${itemProduct.id}`} />;
				})}
				<div className='order'>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className='primary-button'>Checkout</button>
			</div>
		</aside>
	);
};

export default MyOrder;
