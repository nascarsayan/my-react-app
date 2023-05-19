const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a)
console.log(b)
console.log(rest)

// Spread
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2)
const arr3 = [
    [1,2,3],
    arr2
];
console.log(arr3)
const arr4 = [[1, 2, 3], ...arr2];
console.log(arr4)

// Spread inside object
let person = {
    name: 'John',
    age: 20,
};
const p = {
    ...person,
    country: 'USA',
}
console.log(p)
const q = {
    ...arr,
    country: 'USA',
}
console.log(q)


/////

person = {
    name: 'John',
    age: 20,
    address: {
        city: "Chennai",
    }
};

const addr = "TN, India";

const key1 = "val1";


console.log(p);

person["name"] = "FooBar";

console.log(p);

person = "xyz";

let person2 = {
    name: "John",
    age: 20,
}

person2 = "xyz";

// var is similar to let, but it has a global scope.
// Use let instead of var.
// === instead of ==

const post = {
    title: "My Post",
    body: {
        content: "My Post Content",
        comments: [
            "Comment 1",
            "Comment 3",
        ],
    },
}

const { title, body } = post;
console.log(title);
console.log(body);

const { title: myTitle, body: myBody } = post;
console.log(myTitle);
console.log(myBody);

const {
    body: {
        content,
    }
} = post;
console.log(content);

const {
    body: { 
        comments: [comment1, comment2 = "Comment 2"]
    } 
} = post;

console.log(comment1);
console.log(comment2);