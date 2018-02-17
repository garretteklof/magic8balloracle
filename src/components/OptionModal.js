import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		isOpen= {!!props.modalOpen}
		onRequestClose = {props.handleClearSelectedOption}
		contentLabel="Selected Option"
		ariaHideApp={false}
		closeTimeoutMS={200}
		className='modal'
	>
		<h3 className='modal__title'>Selected Option</h3>
		<p className='modal__body'>{props.selectedOption}</p>
		<button className='modal__button' onClick={props.handleClearSelectedOption}>Okay</button>
	</Modal>
);

export default OptionModal;