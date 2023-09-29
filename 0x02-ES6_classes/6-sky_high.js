// Import the Building class from 5-building.js
import Building from './5-building';

// Define the SkyHighBuilding class
class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for sqft attribute
  get sqft() {
    return super.sqft;
  }

  // Getter for floors attribute
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}

// Export the SkyHighBuilding class
export default SkyHighBuilding;

