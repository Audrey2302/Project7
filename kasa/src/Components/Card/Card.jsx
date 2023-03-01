import "./Card.css"

function Card({ cover, title }) {
	return (
		<article className="card">  
			<img className="card_image" src={cover} alt="location" />
            <div className="card_title">
			    <p className="card_title_">{title}</p>
			</div>
		</article>
	)}
export default Card
