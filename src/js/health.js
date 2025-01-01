function getHealthStatus(person) {
    if (person.health > 50) {
      return 'healthy';
    } else if (person.health >= 15) {
      return 'wounded';
    } else {
      return 'critical';
    }
  }
  
  export default getHealthStatus;