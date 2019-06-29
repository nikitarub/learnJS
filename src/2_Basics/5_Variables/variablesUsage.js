// This is first example of variables, function and JSDoc

/**
 * adminName returns admin name
 * @return {string} of "Василий"
 */
function adminName() {
    const name = 'Василий';
    const admin = name;
    return admin; // returning admin just for test system
}

const admin = adminName(); // call and set admin as Vasily

console.log(admin); // let's see if there is a Vasily

module.exports = adminName; // export our function, so we can test it
