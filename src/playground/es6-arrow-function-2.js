const user = {
	name: 'Garrett',
	cities: ['Madison', 'Ames', 'Portland'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived());


const multiplier = {
	numbers: [1,11,37],
	multiplyBy: 4,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());