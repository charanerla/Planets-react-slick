// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  return (
    <div className="planet-item">
      <img
        src={details.imageUrl}
        alt={`planet ${details.name}`}
        className="planet-image"
      />
      <h1 className="planet-name">{details.name}</h1>
      <p className="planet-description">{details.description}</p>
    </div>
  )
}

export default PlanetItem
