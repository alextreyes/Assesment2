### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  - React Router helps make a single-page app feel like a website with different pages, without reloading each time.

- What is a single page application?

  - A single page application loads one main page, updating content as you click around, so it’s fast and smooth.

- What are some differences between client side and server side routing?

  - Client-side: The app changes pages in the browser, making it fast
  - Server-side: The app asks the server for a new page each time, which reloads the page.

- What are two ways of handling redirects with React Router? When would you use each?

  - Navigate to="x", this is more straightfoward and easier to implement
  - useNavigate Hook, we can use this hook to redirect the user after for example, he submittded a form, to a page another page

- What are two different ways to handle page-not-found user experiences using React Router?

  - Catch-all route: Use a \* path so any unmatched URL shows a 404 page.
  - Conditional check: Display a 404 page if there’s no match in the url.

- How do you grab URL parameters from within a component using React Router?

  - You use useParams to get data in the URL, like an ID, inside a component.

- What is context in React? When would you use it?

  - Context shares data like settings or user info with any component in the app, without sending it through each component one-by-one.

- Describe some differences between class-based components and function
  components in React.

  - State: Class components use this.setState() to manage state, while function components use the useState hook
  - Hooks: Function components can use hooks, while class components can’t

- What are some of the problems that hooks were designed to solve?
  - Hooks simplify state management in functions, reduce complexity, and make logic reusable.
