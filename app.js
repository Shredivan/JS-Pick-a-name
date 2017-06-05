let input = document.querySelector('input');
let addToList = document.querySelector('button.addToList');
let submitRandom = document.querySelector('button.submit');
let ul = document.querySelector('ul');

/*
    Empty array to hold values of input field
    Keep as block level element as will be accessed by more than one function
*/
let randomList = [];

//Function to take data from input form and add to list
addToList.addEventListener('click', () =>{
    let li = document.createElement('li');

    // Check if form is empty before submitting value
    // Throw error if empty
    if(input.value.length == 0){
        console.log('error, you need to write a name');
    }
    else{
        // Take input values and add as a list item to DOM
        // TODO: Create conditional statement that blocks input if user submits an integer or float
        li.textContent = input.value;
        ul.appendChild(li);

        // Append input value to empty array for random function
        //TODO: Create a function for this
        randomList.push(input.value);

        // Check values are being added to the array
        console.log(randomList);

        // Empty the array after a value is entered
        input.value = '';
    }
})

submitRandom.addEventListener('click', () =>{
    let div = document.querySelector('div.answer');
    let p = document.createElement('p');
    let h4 = document.createElement('h4');

    // Check for values in list
    // If empty, throw error
    if(ul.textContent.length == 0){
        console.log('error, you need to write a name');
    }
    else{
        let randomAnswer = randomList[Math.floor(Math.random() * randomList.length)];
        console.log(randomAnswer);

        // Take input values and add as a list item to DOM
        // TODO: Stop user from firing the function more than once
        h4.textContent = randomAnswer;
        p.textContent = 'Your Answer is:';
        div.appendChild(p);
        div.appendChild(h4);
    }
})