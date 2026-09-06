const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item, i) => {
  console.log(item.languageName);
});

const myArrays = ["apple", "banana", "orange", "mango", "grapes"];
const values = myArrays.forEach((item, i) => {
  console.log(item);
  return item;
});
console.log(values); // undefined because forEach does not return anything, it just executes the function for each element in the array.

// filter method
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const newNums = myNum.filter((num) => num > 5);
console.log(newNums);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publishYear: 2013,
    edition: 1,
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publishYear: 2016,
    edition: 2,
  },
  {
    title: "Book Three",
    genre: "Fiction",
    publishYear: 2011,
    edition: 1,
  },
  {
    title: "Book Four",
    genre: "Non-Fiction",
    publishYear: 2019,
    edition: 3,
  },
  {
    title: "Book Five",
    genre: "Fiction",
    publishYear: 2015,
    edition: 2,
  },
];
const userbooks = books.filter((book) => book.genre === "Fiction");
const userPublicationsBooks = books.filter((book) => {
  return book.publishYear >= 2013;
});
console.log(userPublicationsBooks);
