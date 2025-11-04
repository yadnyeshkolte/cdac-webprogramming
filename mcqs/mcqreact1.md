

---

## React Basics & Components

**1. What is the correct way to import React in a component?**
- a) `import React from 'react'`
- b) `import react from 'React'`
- c) `require('react')`
- d) `include React`

**Answer: a) `import React from 'react'`**

---

**2. Which of the following is a valid way to create a functional component?**
- a) `function MyComponent() { return <div>Hello</div> }`
- b) `const MyComponent = () => <div>Hello</div>`
- c) Both a and b
- d) None of the above

**Answer: c) Both a and b**

---

**3. What is the file extension commonly used for React components with JSX?**
- a) .js
- b) .jsx
- c) .react
- d) Both a and b

**Answer: d) Both a and b**

---

**4. How do you pass props to a component?**
- a) `<MyComponent props={value} />`
- b) `<MyComponent name={value} />`
- c) `<MyComponent (name=value) />`
- d) `<MyComponent [name]=value />`

**Answer: b) `<MyComponent name={value} />`**

---

**5. What is the correct syntax to access props in a functional component?**
- a) `this.props.name`
- b) `props.name`
- c) `props->name`
- d) `name.props`

**Answer: b) `props.name`**

---

**6. In a class component, how do you access props?**
- a) `props.name`
- b) `this.props.name`
- c) `super.props.name`
- d) `component.props.name`

**Answer: b) `this.props.name`**

---

**7. What is the purpose of React.Fragment?**
- a) To create fragments of code
- b) To group multiple elements without adding extra DOM nodes
- c) To split components
- d) To handle errors

**Answer: b) To group multiple elements without adding extra DOM nodes**

---

**8. What is the shorthand syntax for React.Fragment?**
- a) `<fragment></fragment>`
- b) `<></>`
- c) `<frg></frg>`
- d) `<_></_>`

**Answer: b) `<></>`**

---

**9. Which method must be implemented in a React class component?**
- a) constructor()
- b) render()
- c) componentDidMount()
- d) setState()

**Answer: b) render()**

---

**10. What does "composing components" mean in React?**
- a) Writing CSS for components
- b) Building components by combining smaller components
- c) Compressing components
- d) Encrypting components

**Answer: b) Building components by combining smaller components**

---

## React State & Lifecycle

**11. How do you initialize state in a React class component?**
- a) `state = { count: 0 }`
- b) `this.state = { count: 0 }`
- c) Both a and b in constructor
- d) `setState({ count: 0 })`

**Answer: c) Both a and b in constructor**

---

**12. What is the correct way to update state in a class component?**
- a) `this.state.count = 5`
- b) `this.setState({ count: 5 })`
- c) `state.count = 5`
- d) `updateState({ count: 5 })`

**Answer: b) `this.setState({ count: 5 })`**

---

**13. Which hook is used to manage state in functional components?**
- a) useEffect
- b) useState
- c) useContext
- d) useReducer

**Answer: b) useState**

---

**14. What is the correct syntax for useState hook?**
- a) `const [count, setCount] = useState(0)`
- b) `const count = useState(0)`
- c) `useState(count, 0)`
- d) `const [count] = useState(0)`

**Answer: a) `const [count, setCount] = useState(0)`**

---

**15. Which lifecycle method is called immediately after a component is mounted?**
- a) componentWillMount()
- b) componentDidMount()
- c) componentWillUpdate()
- d) componentDidUpdate()

**Answer: b) componentDidMount()**

---

**16. Which lifecycle method is called before a component is removed from the DOM?**
- a) componentWillUnmount()
- b) componentDidUnmount()
- c) componentWillRemove()
- d) componentDestroy()

**Answer: a) componentWillUnmount()**

---

**17. What happens when setState is called?**
- a) State updates immediately
- b) State update is scheduled asynchronously
- c) Component crashes
- d) Nothing happens

**Answer: b) State update is scheduled asynchronously**

---

**18. Which lifecycle method is called after component updates?**
- a) componentWillUpdate()
- b) componentDidUpdate()
- c) componentHasUpdated()
- d) afterUpdate()

**Answer: b) componentDidUpdate()**

---

**19. What is the difference between props and state?**
- a) Props are mutable, state is immutable
- b) Props are passed from parent, state is managed internally
- c) No difference
- d) State is passed from parent, props are internal

**Answer: b) Props are passed from parent, state is managed internally**

---

**20. Can you modify props directly in a component?**
- a) Yes, always
- b) No, props are read-only
- c) Yes, but only in class components
- d) Yes, using setState

**Answer: b) No, props are read-only**

---

## React Events & Conditional Rendering

**21. What is the correct syntax for handling click events in React?**
- a) `<button onclick={handleClick}>Click</button>`
- b) `<button onClick={handleClick}>Click</button>`
- c) `<button click={handleClick}>Click</button>`
- d) `<button on-click={handleClick}>Click</button>`

**Answer: b) `<button onClick={handleClick}>Click</button>`**

---

**22. How do you prevent default behavior in React events?**
- a) `return false`
- b) `e.preventDefault()`
- c) `e.stopDefault()`
- d) `preventDefault()`

**Answer: b) `e.preventDefault()`**

---

**23. What is the correct way to conditionally render a component?**
- a) `{condition && <Component />}`
- b) `{condition ? <Component /> : null}`
- c) Both a and b
- d) `if(condition) <Component />`

**Answer: c) Both a and b**

---

**24. How do you pass parameters to an event handler?**
- a) `onClick={handleClick(id)}`
- b) `onClick={() => handleClick(id)}`
- c) `onClick={handleClick.bind(this, id)}`
- d) Both b and c

**Answer: d) Both b and c**

---

**25. What is the ternary operator syntax for conditional rendering?**
- a) `{condition ? <A /> : <B />}`
- b) `{condition && <A /> || <B />}`
- c) `{if condition <A /> else <B />}`
- d) `{condition <A /> : <B />}`

**Answer: a) `{condition ? <A /> : <B />}`**

---

## React Lists, Keys & Forms

**26. What is the purpose of "key" prop in React lists?**
- a) For styling
- b) To uniquely identify elements for efficient updates
- c) To lock components
- d) For security

**Answer: b) To uniquely identify elements for efficient updates**

---

**27. What is the correct way to render a list in React?**
- a) `items.map(item => <li key={item.id}>{item.name}</li>)`
- b) `items.forEach(item => <li>{item.name}</li>)`
- c) `for(item in items) <li>{item.name}</li>`
- d) `items.loop(item => <li>{item.name}</li>)`

**Answer: a) `items.map(item => <li key={item.id}>{item.name}</li>)`**

---

**28. Can you use array index as key in React lists?**
- a) Yes, always recommended
- b) No, never
- c) Yes, but not recommended if list order can change
- d) Only in functional components

**Answer: c) Yes, but not recommended if list order can change**

---

**29. How do you create a controlled component in React?**
- a) Using refs
- b) By managing input value with state
- c) Using uncontrolled attribute
- d) Using defaultValue

**Answer: b) By managing input value with state**

---

**30. What is the correct way to handle form input changes?**
- a) `<input onChange={e => setState(e.target.value)} />`
- b) `<input onchange={handleChange} />`
- c) `<input change={handleChange} />`
- d) `<input on-change={handleChange} />`

**Answer: a) `<input onChange={e => setState(e.target.value)} />`**

---

**31. What is the difference between controlled and uncontrolled components?**
- a) No difference
- b) Controlled components store form data in component state
- c) Uncontrolled components are faster
- d) Controlled components don't use state

**Answer: b) Controlled components store form data in component state**

---

**32. How do you access DOM nodes directly in React?**
- a) document.getElementById()
- b) Using refs
- c) Using keys
- d) Using props

**Answer: b) Using refs**

---

## React Advanced Concepts

**33. What is "lifting state up" in React?**
- a) Moving state to localStorage
- b) Moving state to a common parent component
- c) Increasing state value
- d) Moving state to Redux

**Answer: b) Moving state to a common parent component**

---

**34. What is the purpose of React.createRef()?**
- a) To create references to DOM elements
- b) To create new components
- c) To manage state
- d) To handle routing

**Answer: a) To create references to DOM elements**

---

**35. How do you use refs in functional components?**
- a) React.createRef()
- b) useRef()
- c) this.refs
- d) createReference()

**Answer: b) useRef()**

---

**36. What are Error Boundaries in React?**
- a) Components that catch JavaScript errors in child component tree
- b) CSS boundaries
- c) Network error handlers
- d) Form validation

**Answer: a) Components that catch JavaScript errors in child component tree**

---

**37. Which lifecycle method is used to catch errors in Error Boundaries?**
- a) componentDidCatch()
- b) catchError()
- c) handleError()
- d) onError()

**Answer: a) componentDidCatch()**

---

**38. What is React Context used for?**
- a) To style components
- b) To pass data through component tree without props drilling
- c) To handle routing
- d) To manage forms

**Answer: b) To pass data through component tree without props drilling**

---

**39. What is the composition pattern in React?**
- a) Using CSS composition
- b) Building complex UIs by combining simpler components
- c) Database composition
- d) File composition

**Answer: b) Building complex UIs by combining simpler components**

---

**40. What is the difference between composition and inheritance in React?**
- a) No difference
- b) React recommends composition over inheritance
- c) Inheritance is better
- d) Both are discouraged

**Answer: b) React recommends composition over inheritance**

---

## Redux Fundamentals

**41. What are the three core principles of Redux?**
- a) Components, Props, State
- b) Single source of truth, State is read-only, Pure functions
- c) Actions, Reducers, Components
- d) Store, View, Controller

**Answer: b) Single source of truth, State is read-only, Pure functions**

---

**42. What is an action in Redux?**
- a) A function that modifies state
- b) A plain JavaScript object with a type property
- c) A component
- d) A middleware

**Answer: b) A plain JavaScript object with a type property**

---

**43. What is the correct structure of a Redux action?**
- a) `{ type: 'ACTION_TYPE', payload: data }`
- b) `{ action: 'ACTION_TYPE', data }`
- c) `{ name: 'ACTION_TYPE', value: data }`
- d) `{ event: 'ACTION_TYPE', info: data }`

**Answer: a) `{ type: 'ACTION_TYPE', payload: data }`**

---

**44. What is a reducer in Redux?**
- a) A component
- b) A pure function that takes state and action, returns new state
- c) A middleware
- d) An action creator

**Answer: b) A pure function that takes state and action, returns new state**

---

**45. What is the Redux store?**
- a) A database
- b) A central state container for the entire application
- c) A component
- d) A routing system

**Answer: b) A central state container for the entire application**

---

**46. Which method is used to create a Redux store?**
- a) Redux.createStore(reducer)
- b) createStore(reducer)
- c) new Store(reducer)
- d) Redux.Store(reducer)

**Answer: b) createStore(reducer)**

---

**47. How do you dispatch an action in Redux?**
- a) `store.dispatch({ type: 'ACTION_TYPE' })`
- b) `dispatch.action({ type: 'ACTION_TYPE' })`
- c) `store.send({ type: 'ACTION_TYPE' })`
- d) `action.dispatch({ type: 'ACTION_TYPE' })`

**Answer: a) `store.dispatch({ type: 'ACTION_TYPE' })`**

---

**48. How do you connect React component to Redux store?**
- a) Using connect() HOC
- b) Using useSelector() and useDispatch() hooks
- c) Both a and b
- d) Direct import

**Answer: c) Both a and b**

---

**49. What is the purpose of mapStateToProps in React-Redux?**
- a) To dispatch actions
- b) To map Redux state to component props
- c) To create new state
- d) To update store

**Answer: b) To map Redux state to component props**

---

**50. What is the purpose of mapDispatchToProps in React-Redux?**
- a) To access state
- b) To map action creators to component props
- c) To create reducers
- d) To configure store

**Answer: b) To map action creators to component props**

---
