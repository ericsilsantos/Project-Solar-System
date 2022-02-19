import React from 'react';
import PropTypes from 'prop-types';

class PlanerCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planeta" data-testid="planet-card">
        <img
          className={ `planetaImg ${planetName}` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanerCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanerCard;
