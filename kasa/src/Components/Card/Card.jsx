//importation de la bibliotheque styled components
//import styled from 'styled-components'
//importation de proptypes 
//import PropTypes from 'prop-types'


import "./Card.css"

//ce composant récupere 2 props  
function Card({ cover, title }) {
	return (
		<article className="card">  
			<img className="card_image" src={cover} alt="location" />
            <div className="card_title">
			    <p className="card_title_">{title}</p>
			</div>
		</article>
	);
}
//<img src={cover} alt="image de la location"/>
  
export default Card
//Card  récupère 3 props,  label  ,  title  et  picture  . On va donc importer  PropTypes  depuis la bibliothèque et utiliser  Card.propTypes  pour préciser les types de chacune des propriétés.