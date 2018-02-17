import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

	state = {
		options: [],
		selectedOption: undefined,
		modalOpen: false
	};

	handleClearSelectedOption = () => {
		this.setState(() => ({
			modalOpen: false
		}));
		console.log(this.state.selectedOption);
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	};
	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption: option,
			modalOpen: true
		}));
	};

	handleAddOption = (option) => {

		if (!option) {
			return 'Enter valid value to add an option.'
		}
		else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists.'
		}

		this.setState((prevState) => ({ 
			options: prevState.options.concat([option])
		}));
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({options}));
			}
		}
		catch(e) {
			// do nothing at all
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	render() {
		const title = 'Magic8BallOracle';
		const subtitle = 'Type, click, and you shall see.';

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className='container'>
					<Action 
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
						/>
					<div className='widget'>
						<Options 
							options = {this.state.options} 
							handleDeleteOptions = {this.handleDeleteOptions}
							handleDeleteOption = {this.handleDeleteOption}
						/>
						<AddOption 
							handleAddOption = {this.handleAddOption}/>
					</div>
					<OptionModal 
						selectedOption = {this.state.selectedOption}
						modalOpen = {this.state.modalOpen}
						handleClearSelectedOption = {this.handleClearSelectedOption} 
						/>
				</div>
			</div>
		);
	}
}