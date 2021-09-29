# Tic Tac Toe, with React Hooks

I built this simple game using React Hooks.

State and functionality is managed from a container file. Containers represent pages, while components represent stateless parts of the application.
Typically I would use a container to call and manage data from a backend, and to manage state. Smaller components are typically designed to be reusable.

I used a helper file to store and import the function that creates the winner
There is one child component, the button. Data and functions are passed from the container via props. Simple ternary operators dictate the styling of the button.

I kept this simple but hopefully elegant. 

CSS is vanilla CSS, again keeping things simple. Flexbox is used to arrange the buttons on the game board.
