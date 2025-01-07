
# Nextjs15 Crash Course (Codevolution)

## New Next.js15 Project and its Project Structure (3:02)

Q. What happens when we run `npm run dev` in terminal?
# once we run `npm run dev` the flow of execution starts in `package.json` which run the dev script, execution moves onto `layout.tsx` in the app folder and this will render the root layout component of our Nextjs application. For root route i.e, `page.tsx` in the app folder the home component is rendered in place of children in the root layout.

## React Server Components (8:10)

# React Server Components is a new architecture introduced by the React team which was quickly embraced by Next.js. This architecture introduces a new way of creating React components, splitting them into two types :-
1). Server components
2). Client components

# In an ideal scenario, client components are Leaf components in our app component tree.

## File based Routing (12:40)

# Next.js has a file-system based routing mechanism. The way we organize our files and folders determines the routes of our application.

# Routing conventions :-
- all routes must be place inside the `app` folder,
- every file that represents a route should be named `page.js` or `page.tsx`,
- every folder corresponds to a path segment in the browser URL

# Note - In Next.js15, dynamic APIs have been made asynchronous and `params` is one of them hence we will have to convert our react component into `async` function

# Layouts 

# What if we want to share UI elements across multiple pages, this is where the concept of `layout` comes in. 

# Layouts allow us to define UI that is shared between multiple pages.

# The root layout within `src/app` which wraps all the pages in Nextjs application. The `children` prop represents the page content which Next.js will automatically populate based on the current route.

# To determine the current route, Next.js provides the `usePathname` hook.

# To achieve programmatic navigation we will rely on `useRouter` hook. The `Link` component and `router.push()` from `useRouter` are fundamental for navigating between the pages in Next.js15 application.

# The `app` router is not just for UI, it can also handle data. Next.js provides a feature called `Route Handlers` that allows us to create custom request handlers for our application.

## Route Handlers (26:18)

# To create a route handler we will use the app routers file based routing system in the app.

# In order to create a route handler, the file name must be `route.ts` as per Nextjs convention.

## Fetching Data (32:31)

# Data fetching (Client component)

# Nextjs15 offers powerful data fetching capabilities that almost blur the line between frontend and backend.

# For Mock API we shall use https://jsonplaceholder.typicode.com/

# In CLient component we have to use async-await within useEffect to make API call where as in Server component we can directly make API call within asyn-await.

# Data fetching (Server component with loading and error and state)

# File name must be `loading.tsx` and `error.tsx` as er Nextjs convention.

# Note - Nextjs will automatically use these files (loading.tsx & error.tsx) to show loading state and handle errors for the user's server component defined in the `page.tsx`.

# Key difference between data fetching on client component vs data fetching on server component :- with server side rendering the loading and error states are handled automatically by Next.js whereas in the client side approach we have to manually manage these states.

# We should prefer server side rendering over client side rendering for data fetching due to following reasons :-
- reduced bundle size,
- lower latency,
- improved SEO,
- direct access to backend resources
- and the ability to secure sensitive data,

# We should opt for client components for data fetching only when it's absolutely necessary such as when we need real-time updates or when the data depends on client-side interactions that can't be predicted server-side.

# How can we handle form submissions or modify our database that is where server actions come into play.

# Server Actions (40:00)

# Server Actions are asynchronous functions that are executed on the server. They allow us to define and execute server-side logic directly from our components. They are incredibly useful for handling form submission, updating databases, or any operation that requires server-side execution.

# We can't use JSON placeholder for Server Actions demo because it won't actually save our changes instead we are going to use https://mockapi.io/

# Let us start by creating a new server component to fetch and display mock users data.

# We have created from to add users. the obvious approach might be to handle it client-side with a simple `fetch` request on button click but doing so introduces a vulnerability if the service mock API for instance requires an auth token or API key then we need to expose it to client side and this is no go because any user could inspect the code, extract the key and potentially abuse our account or rack up API charges. Typically we would need a separate server to handle this securely. With Nextjs we could write the code using route handler but Server Actions give us an even better option by which we can write the server code right here in our server component.

# FromData is a built-in browser API that provides a way to easily construct key-value pairs representing form fields and their values.

# Within the `addUser` function we will include `use server` directive that tells Nextjs that, this function (`addUser`) should be executed on the server> It is a key feature of server actions in Nextjs
