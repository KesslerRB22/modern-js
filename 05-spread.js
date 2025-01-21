const user = {
    firstName: 'Kessler',
    lastName: 'Barreto',
    age: 22,
    instagram: 'kesslerrodrigues',
    skills: ['Node', 'JavaScript', 'TypeScript'],
    active: false
};

//Spread operator
const updatedUser = {
    ...user,
    active: true,
    skills: [...user.skills, 'React'],
};

console.log({user});
console.log({updatedUser});