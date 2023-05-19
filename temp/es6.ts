// a new variable rest will be created and it will be an array of all the remaining values.
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a)
console.log(b)
console.log(rest)

// Spread
const arr = [1, 2, 3];
// All the objects in arr will be spread out and added to arr2
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
// All the properties in person will be spread out and added to p
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

const addr = "TN, India";
// A new property addr will be added to p3, and it will have the value of addr.
const p3 = {
    ...p3,
    addr,
    // addr: addr, // same as above.
}
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

// Two new variables title and body will be created and they will have the values of post.title and post.body respectively.
const { title, body } = post;
console.log(title);
console.log(body);

// Two new variables myTitle and myBody will be created and they will have the values of post.title and post.body respectively.
const { title: myTitle, body: myBody } = post;
console.log(myTitle);
console.log(myBody);

const {
    body: {
        content,
    }
} = post;
console.log(content);

// Two new variables comment1 and comment2 will be created and they will have the values of post.body.comments[0] and post.body.comments[1] respectively. If post.body.comments[1] is undefined because the array has only one element, then comment2 will have the default value of "Comment 2".
const {
    body: { 
        comments: [comment1, comment2 = "Comment 2"]
    } 
} = post;

console.log(comment1);
console.log(comment2);

//

// Three ways to declare functions

let addOne = (num: number) => num + 1;
addOne = (num: number) => {
return num + 1;
};
addOne = function (num: number) {
return num + 1;
};
