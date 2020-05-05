# todo-list
While building this application I learnt the basic concepts of react.
I learnt how react functinos when the state of a component changes, the program reacts to the state change leading to the functioning of the program.
I understood how we divide different elements of the program and into components and then establish a logical mapping amognst them in order to achieve proper functioning and logical presentation of the data according to our requirements.
different methods and invoked when a certain state change takes place and re-evaluated the state of each component affected by that particular method invocation and stores the data for further application.
In this application, we have three main components: Todo-Input, Todo-List and Todo-Items.
The component Todo input allows us to take user input of the tasks to be performed and add them to the list of the task to be performed.
The component Todo list inherits all the task from todo-input and creates a list of all the task to be performed by the user, it provides a functionality that checks if there are any task to perform, if not it displays: "No task to perform" else provides a button that clears all the task available in the list. It then passes the information of all the task to be performed to Todo-Items.
The Todo- Item components displays eash item seperately to the list and adds a star, delete icon and the right side of the element, which can be used to star/pin and delete the element respectively. 
In the end all the components are imported in the App.js file and put together to provide a proper functionality to the user.
