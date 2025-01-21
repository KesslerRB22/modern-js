const user = {
    firstname: 'Kessler',
    lastname: 'Barreto',
    age: 22,
    instagram: 'kesslerrodrigues',
    skills: ['Node', 'JavaScript', 'TypeScript']
};

const {firstname, skills, ...resto} = user;
const [primary] = skills;

console.log(resto);
