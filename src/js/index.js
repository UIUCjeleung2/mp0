/* Your JS here. */

// Get the document elements
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const buttonbox = document.getElementById('button-container');
    const image = document.getElementById('bear');
    const text_elements = document.querySelectorAll(".hidden-text");

    // Make the buttons that change our div color to the
    // corresponding colors in the example
    const button1 = document.createElement('button');
    button1.textContent = 'Red';
    button1.addEventListener('click', () => {
        container.style.backgroundColor = "#ce312d";
    });
    buttonbox.appendChild(button1);

    const button2 = document.createElement('button');
    button2.textContent = 'Blue';
    button2.addEventListener('click', () => {
        container.style.backgroundColor = "#6563cf";
    });
    buttonbox.appendChild(button2);

    const button3 = document.createElement('button');
    button3.textContent = 'Grey';
    button3.addEventListener('click', () => {
        container.style.backgroundColor = "#656565";
    });
    buttonbox.appendChild(button3);


    // Add click listeners to portions of our container
    // so we can open and close our container
    container.addEventListener('click', (event) =>  {
        if (event.target === image) {
        // If I click on the image, close the thing
        console.log("Clicked on image");
        text_elements.forEach(element => {
            element.style.display = 'none';
        });
        } else if (event.target === container) {
        // If I click on the container, give out some extra autobiographical text
        console.log("Clicked on container");
        text_elements.forEach(element => {
            element.style.display = 'block';
        });
        }
    });
})
