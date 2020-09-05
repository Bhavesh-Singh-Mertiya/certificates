import React from 'react'
import './Card.css'
import Alldata from './Data.json'

class Card extends React.Component {
	render(){
		return(
			<div>
				{Alldata.map( (i) => {
					return ( 
						<img src={i.url} alt='React logo' className="imageset" />
					)
				})}
			</div>
		)
	}
}

export default Card