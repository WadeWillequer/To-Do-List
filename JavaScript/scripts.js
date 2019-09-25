// Make references to the HTML elements that we want to interact with through JS

// add in the ability to add a new list item

// add in the ability to remove a list item

// add in the ability to mark a list item as done

var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul"); // querySelector gets the first instance of a particular element type. Since we only have one ul, this will create a reference to that ul.

function createListElement() {
    // create a new li element
    var li = document.createElement("li");
    // add content to it
    li.innerHTML = input.value;
    // add it to our ul
    ul.appendChild(li);
    // clear out text input after we create our new list item
    input.value = "";

    // function to handle showing a list item complete
    function markDone() {
        // if the li does not have a class of done applied to it, it will be applied
        li.classList.toggle("done");
    }

    li.addEventListener("click", markDone);

    // create the button that will be added to the list item
    var deleteButton = document.createElement("button");
    // Give button text of "X"
    deleteButton.innerText = "X";
    // Add the button as a child of the li
    li.appendChild(deleteButton);

    // function will be called when delete button is tapped
    function deleteListItem(){
        // add the delete class to the list item
        li.classList.add("delete");
    }

    deleteButton.addEventListener("click", deleteListItem);
}

// this is going to used to create a list element when the submit button is tapped
function createListItemSubmitButton() {
    // check to make sure our input actually has some text , an empty string will have a length of 0
    if (input.value.length > 0) {
        createListElement();
    }
}

// This is going to be used to create a list element when the enter key is pressed
function createListItemEnterKey(event) {
    console.log(event.keyCode);

    // Create a new list item if there is text in the input field and the enter key is pressed

    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }

}

// Make it so that when the submit button is clicked, the createListElement function is called
submitButton.addEventListener("click", createListItemSubmitButton);


// this event listener will detect when keys are pressed while the input is active 
input.addEventListener("keypress", createListItemEnterKey);