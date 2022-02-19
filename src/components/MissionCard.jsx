import React from 'react';
import PropTypes from 'prop-types';

class MissionsCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="missao" data-testid="mission-card">
        <p className="tituloMissao" data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{`Ano: ${year}`}</p>
        <p data-testid="mission-country">{`País: ${country}`}</p>
        <p data-testid="mission-destination">{`Destino: ${destination}`}</p>
      </div>
    );
  }
}

MissionsCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionsCard.defaultProps = {
  name: ' ',
  year: 0,
  country: ' ',
  destination: ' ',
};

export default MissionsCard;
