# 🚀 Dev Stack

Dev Stack is a modern technology stack builder for developers. 
It allows users to explore different development technologies, 
compare them, and create their own custom technology stack.

## 🛠️ Technologies Used

- React.js
- TypeScript
- CSS
- React-Toastify
- JSON
- Vite

## ✨ Features

### 1. Explore Technologies
Users can explore different frontend, backend, database, language,
styling, and DevOps technologies with useful information such as
rating, difficulty, category, and description.

### 2. Build Your Own Stack
Users can add technologies to their personal stack and see all
selected technologies in the "Your Stack" section.

### 3. Add and Remove Technologies
Users can add technologies, remove individual technologies, or
remove all selected technologies. Duplicate technologies cannot
be added to the stack.

---

# 🧠 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside
JavaScript or TypeScript.

It is used in React because it makes writing and understanding
the UI of components easier.

---

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data that is managed inside a component and can change
when the user interacts with the application.

In simple words:

- Props = data received from parent
- State = data managed by the component

---

## 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook is used to store and update data inside a
React component.

In this project, I used `useState` to manage:

- Technology data
- Selected technologies
- Loading state

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React
component.

I used `useEffect` to fetch the technology data from the local
JSON file when the Technologies component loads.

This keeps the JSON data separate from the component.

---

## 5. Why does every item in a .map() list need a unique key prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item has changed, been added,
or been removed.

For example:

```tsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))