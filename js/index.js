//Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1 = `Borja`
console.log(`The driver's name is ${hacker1}`)
let hacker2 = `Stephanie`
console.log(`The navigator's name is ${hacker2}`)
    //Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
//Iteration 3: Loops
//3.1

hacker1Capital = "";

for (let i = 0; i < hacker1.length; i++)

    hacker1Capital = hacker1Capital + hacker1[i].toUpperCase() + " "

console.log(hacker1Capital);

//3.2

hacker1Reverse = " ";
for (i = 0; i < hacker1.length; i++)

    hacker1Reverse = hacker1[i] + hacker1Reverse

console.log(hacker1Reverse);

//3.3

for (let i = 0; i < 1; i++)
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.")
    } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker1[i] == hacker2[i]) {
    console.log("What?! You both have the same name?")
}

//Bonus

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis ex nec felis tempus, in vulputate eros interdum. Nunc velit justo, lobortis consectetur egestas eget, finibus eget magna. Pellentesque urna neque, laoreet euismod dui non, finibus luctus orci. Mauris lorem magna, gravida a elementum vitae, aliquet et quam. Etiam vel molestie lectus, sit amet congue ante. Nullam posuere sollicitudin leo tempor pulvinar. Cras molestie ex sagittis laoreet hendrerit. Nam gravida ex fermentum magna facilisis luctus. Mauris gravida purus a neque egestas euismod. Duis dictum fermentum molestie. Donec ante augue, iaculis sit amet dui ut, scelerisque malesuada metus. Sed fringilla nunc at scelerisque ultrices. Mauris a rhoncus elit. Integer mi mauris, dignissim vitae consectetur in, luctus vulputate nibh. Duis fermentum varius dolor, nec congue mi hendrerit at. Nam euismod eros nisi, sed lacinia ligula mollis ut. Vestibulum vehicula sapien et massa vulputate pharetra. Nam massa neque, hendrerit sed vulputate eu, tempus nec lectus. Phasellus tempus ante nulla, sed tincidunt ex lacinia ac. Proin sit amet nisi eu felis elementum lacinia. Morbi imperdiet eleifend felis, bibendum vehicula est venenatis at. Ut turpis ipsum, consectetur id auctor sit amet, pellentesque gravida ante. Nulla risus nibh, luctus eget egestas non, sollicitudin quis ex. Praesent a molestie lorem. Quisque lobortis feugiat velit. Nulla non vehicula felis, quis vehicula felis. Fusce vitae purus ac tortor auctor venenatis. Quisque elementum tortor eros, id cursus augue rutrum id. In euismod lectus efficitur tincidunt placerat. Donec ac quam vel orci faucibus venenatis. Nulla quam elit, aliquet eget magna id, hendrerit viverra felis. Aenean euismod sodales sapien ornare aliquam. Fusce commodo ligula at augue pellentesque congue. Phasellus finibus urna mauris, a laoreet ligula hendrerit et. Duis convallis neque ut tincidunt aliquet."

//Bonus 1.2

let words = paragraph.split(" ")

console.log(words)

console.log(words.length)

//Bonus 1.3

let count = 0

for (i = 0; i < words.length; i++) {
    if (words[i] === "et")
        count += 1
}
console.log(count)