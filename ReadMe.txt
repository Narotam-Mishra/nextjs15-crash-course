
# Nextjs15 Crash Course (Codevolution)

## New Next.js15 Project and its Project Structure (3:02)

Q. What happens when we run `npm run dev` in terminal?
# once we run `npm run dev` the flow of execution starts in `package.json` which run the dev script, execution moves onto `layout.tsx` in the app folder and this will render the root layout component of our Nextjs application. For root route i.e, `page.tsx` in the app folder the home component is rendered in place of children in the root layout.

## React Server Components (8:10)

# React Server Components is a new architecture introduced by the React team which was quickly embraced by Next.js. This architecture introduces a new way of creating React components, splitting them into two types :-
1). Server components
2). Client components

# In an ideal scenario, client components are Leaf components in our app component tree.

## Routing (12:40)
