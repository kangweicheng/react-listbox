import React from 'react';
import PropTypes from 'prop-types';
import './ListBox.css'
class ListBox extends React.Component{
	state = {
		hi: 'hi'
	}
	render(){
		const {border, data, style, className} = this.props

		var boxClassName = ['m-2']
		if(border){
			boxClassName.push('flexible-listbox')
		}else{
			boxClassName.push('flexible-listbox-borderless')
		}
		boxClassName = boxClassName.concat(className.split(' '))

		return(
			<div className = {boxClassName.join(' ')} style={style}>
				{
					data.map((datum) => {
						return (
							<div className = 'list-item my-2'>
								{
									datum
								}
							</div>
						)
					})
				}
			</div>
		)
	}
}
ListBox.defaultProps = {
	style: {

	},
	className: 'm-2',
	border: true,
	data: []
}
ListBox.propTypes = {
	style: PropTypes.object,
	className: PropTypes.string,
	border: PropTypes.bool,
	data: PropTypes.arrayOf(PropTypes.element)
}
export default ListBox