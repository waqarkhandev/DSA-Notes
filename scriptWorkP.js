// let data = "Entered Data Demo";
// let right = true;
// let wrong = false;
// const numericArr = [1, 2, 3, 4, 5, 2, 5];
// const alphaNumericArr = [1, "Wiki2", 3, "Khan", "Ali", 2, 5];
// const nestedArr = [1, ["Wiki2", 33, 55], 3, "Khan", "Ali", 2, 5];
// console.log(data);

// // const reducedArr = alphaNumericArr.some((total, value, arr) => {
// //   console.log("Total", total);
// //   console.log("value", value);
// //   console.log("arr", arr);
// // });

// // console.log(typeof reducedArr);
// function isPalindrome(str) {
//   // Iterate over the characters in the string
//   for (let i = 0; i < str.length / 2; i++) {
//     // Compare the characters at the beginning and end of the string
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log("palendrom condition true",isPalindrome('racecar')); // Output: true
// console.log("palendrom condition false",isPalindrome('hello')); // Output: false

// function diagonalDifference(arr) {
//   // Write your code here
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i][i];
//     // for (let k = arr.length - 1; k >= 0; k--) {
//     sum2 += arr[i][arr[i].length - i - 1];
//     // }
//   }
//   console.log(sum1);
//   console.log(sum2);
//   let result = sum1 - sum2;
//   return result;
// }
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, -12],
// ];

// console.log(diagonalDifference(arr));

// function plusMinus(arr) {
//   // Write your code here
//   let positive = 0;
//   let negative = 0;
//   let zero = 0;
//   arr.forEach((res) => {
//     if (res > 0) {
//       positive++;
//     } else if (res == 0) {
//       zero++;
//     } else if (res < 0) {
//       negative++;
//     }
//   });
//   positive = (positive / arr.length).toFixed(6);
//   negative = (negative / arr.length).toFixed(6);
//   zero = (zero / arr.length).toFixed(6);
//   return [positive, negative, zero];
// }

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

// const string ="821 (Ranjhan Ali)";

// const numbers = string.match(/\d+/g);

// console.log(numbers);

// const s= 'This string has two words: foo and bar 22232';

// const matches = s.match("22232");

// console.log(matches);

// const dateString = '07:05:45PM';

// const date = new Date(dateString);

// const options = {
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   hour12: false
// };

// const formatter = new Intl.DateTimeFormat('en-US', options);

// const formattedDate = formatter(date);

// console.log(formattedDate); // Output:

// function miniMaxSum(arr) {
//   let sortedArr = arr.sort((a, b) =>  a-b);
//   let count = 0;
//   let count1 = 0;
//   console.log(sortedArr);
// }

// miniMaxSum([1, 3, 4, 5, 6, 8]);

// function timeConversion(s) {
//   // Write your code here
//   let mm = s.slice(3, 5);
//   let ss = s.slice(6, 8);
//   let amPm = s.slice(s.length - 2, s.length);
//   if (amPm.toLowerCase() === "pm") {
//     let hh = Number(s.slice(0, 2));
//     if (hh === 12) {
//       hh = "12";
//     } else {
//       hh += 12;
//     }
//     console.log(`${hh}:${mm}:${ss}`);
//     return `${hh}:${mm}:${ss}`;
//   } else {
//     let hh = s.slice(0, 2);
//     if (hh === "12") {
//       hh = "00";
//     }
//     return `${hh}:${mm}:${ss}`;
//   }
// }
// timeConversion("12:45:54PM");

// function gradingStudents(grades) {
//   function nextMultipleOfFive(num) {
//     while (num) {
//       if (num % 5 === 0) return num;
//       num += 1;
//     console.log("num",num)
//     }

//     return num;
//   }

//   const newGrades = grades.map((grade) => {
//     const roundGrade = nextMultipleOfFive(grade);
//     if (grade < 38) return grade;

//     return roundGrade - grade >= 3 ? grade : roundGrade;
//   });

//   return newGrades;
// }
// console.log(gradingStudents([4, 78, 67, 38, 33]));

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     // Write your code here
//     let applecount=0
//     let orangecount=0
//     for(let i =0;i<apples.length;i++){
//         let disCal=a+apples[i]
//         if(disCal>=s&&disCal<=t){
//             applecount+=1
//         }
//     }
//     for(let i =0;i<oranges.length;i++){
//         let disCal=b+oranges[i]
//         console.log(disCal)
//         console.log("s-->",disCal<s)
//         console.log("t-->",disCal>t)
//         if(disCal>=t&&disCal<=s){
//             orangecount+=1
//         }
//     }
//     return [applecount,orangecount]
// }

// console.log(countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]))
// function reverseString(s) {
//   let u = "";
//   if (typeof s === "string") {
//     s.split("", s.length).reverse().forEach((res) => u += res);
//     console.log(u);
//   } else {
//     console.log("s.split is not a function");
//     console.log(s);
//   }
// }

// reverseString("12345")

// let array1=["waqar","khan",1,3,5,6]
// const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}

// for(let item of array1){
//   console.log("of loop",item)
// }

// for(let index in array1){
//   console.log("in loop",index)
// }
// for(let index in obj){
//   console.log("in loop",index)
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create a linked list
let head = new Node(10);
let node1 = new Node(20);
let node2 = new Node(30);

console.log("Head ====>", head);
console.log("Node 1 ====>", node1);
console.log("Node 2 ====>", node2);
// Connect nodes in the linked list
node1.next = node2;
head.next = node1;
console.log("2 Head ====>", head);
console.log("2 Node 1 ====>", node1);
console.log("2 Node 2 ====>", node2);

// Traverse the linked list
let current = head;
console.log("current ====>", current);
while (current) {
  console.log(current.next);
  current = current.next;
  // console.log(current);
}

// Tree Non-Linear Data Structure Program

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Create a binary search tree
let root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

console.log(root);
// Perform an inorder traversal
function inorderTraversal(node) {
  if (!node) return;
  inorderTraversal(node.left);
  // console.log("left Traversal",inorderTraversal(node.left))
  console.log(node.data);
  inorderTraversal(node.right);
}

inorderTraversal(root); // Output: 20, 30, 40, 50, 60, 70, 80
