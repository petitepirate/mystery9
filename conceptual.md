### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Its the standard routing library for React.  It keeps your UI in sync with the URL.

- What is a single page application?
It  is an app that works inside a browser and does not require page reloading during use. 

- What are some differences between client side and server side routing?
Server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser

- What are two ways of handling redirects with React Router? When would you use each?
* With a Redirect tag. Used when you want the new location to override the current location in the history stack. (You shouldn't have gone here, go here instead.)
* Calling .push on the history object. Used when you want to move your user to a new location after they have completed something.

- What are two different ways to handle page-not-found user experiences using React Router? 
With a "catchall" route or with a Redirect component

- How do you grab URL parameters from within a component using React Router?
With the useParams hook

- What is context in React? When would you use it?
Universal data across the application. Used when 'deeply' nested component needs access to data. Avoids passing props from a parent to a great grandchild for example.

- Describe some differences between class-based components and function
  components in React.
Class-based componenets have state initialized in the constructor, and use methods like setState to change. Class-based components rely on 'this,' which can lose context so oftentimes you need to bind your methods in the constructor.

- What are some of the problems that hooks were designed to solve?
Duplication and repeating of code and logic within class components or shared amongst components.
Remove the need for higher order components and render props, which could make it hard to follow the logic (and possibly lead to wrapper hell).
