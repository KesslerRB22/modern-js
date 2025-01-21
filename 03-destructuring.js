const user = {
    firstname: 'Kessler',
    lastname: 'Barreto',
    age: 22,
    instagram: 'kesslerrodrigues',
    skills: ['Node', 'JavaScript', 'TypeScript']
}; 

//destructuring
const {age} = user;

console.log(age);



//Destructuring array 
const user = {
    firstname: 'Kessler',
    lastname: 'Barreto',
    age: 22,
    instagram: 'kesslerrodrigues',
    skills: ['Node', 'JavaScript', 'TypeScript']
};

const {firstname, age, skills} = user;
const [primary, secondary, tertiary] = skills;

console.log(primary);





