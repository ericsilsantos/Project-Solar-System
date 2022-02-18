import React from 'react';

class PlanerCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props
    return (
      <div data-testid="planet-card">
        <img src={planetImage} alt={`Planeta ${planetName}`} />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

export default PlanerCard;
