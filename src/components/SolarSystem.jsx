import React from 'react';
import Title from './Title';
import PlanerCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="sistemaSolar">
          {planets.map(({ name, image }) => (
            <PlanerCard key={ name } planetName={ name } planetImage={ image } />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
