function countAnimals(animals, count) {
    const animalCounts = count.map(animal => {
        const regex = new RegExp(animal, 'g');
        const countMatches = (animals.match(regex) || []).length;
        return countMatches;
    });
    return animalCounts;
}
