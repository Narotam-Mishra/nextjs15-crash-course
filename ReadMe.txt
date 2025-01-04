
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

# The root layout within `src/app` which wraps all the pages in Nextjs application. The `children` prop represents the page content which NExt.js will automatically populate based on the current route.

# To determine the current route, Next.js provides the `usePathname` hook.

# To achieve programmatic navigation we will rely on `useRouter` hook. The `Link` component and `router.push()` from `useRouter` are fundamental for navigating between the pages in Next.js15 application.

# The `app` router is not just for UI, it can also handle data. Next.js provides a feature called `Route Handlers` that allows us to create custom request handlers for our application.