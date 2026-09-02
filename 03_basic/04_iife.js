// Immedieatly Invoked Function Expression (IIFE)

// Global scope can sometimes cause problems because it contains variables and other declarations. To avoid global scope pollution, we use an IIFE (Immediately Invoked Function Expression).
// An IIFE creates its own scope, so the variables and functions declared inside it do not pollute the global scope or cause naming conflicts.

(function one() {
    // named iife
    console.log(`DB CONNECTED`);
})();

(() => {
    // unnamed iife
    console.log(`DB CONNECTED TWO`);
})();