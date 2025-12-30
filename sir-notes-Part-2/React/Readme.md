# React Training
### What is React?
React is a JS library for building fast, interactive UI using Resuable components. Developed by Facebook and is widely used for creating Single Page Applications and dynamic web apps. 

### Key components of React
1. Component-based Architecture. 
    - React Apps are built from Components, which are independent, reusable UI code. Each component can manage its own state and logic along with UI elements. 
    - UI Elements will be HTML elements created like XML. 
2. Declarative UI
    - React uses a declarative approach, U describe what the UI should look like for a given state/data, React handles the rendering and updating part of the Application. 
3. Virtual DOM
    - React uses a VIRTUAL DOM to efficiently update the UI. The Virtual DOM is like object in memory and U define the content and state to this object. During rendering, the Virtual DOM elements are transfered to the physical DOM(Browser) which is managed by React. 
    - It compares the current and previous States(data) and updates only the parts that are modified, hense improving the performance.
    
### Why React?
- Reusable Components, Create once, use anywhere. 
- Faster rendering: Due to VDOM, only partial changes are rendered.
- Strong Ecosystem: Tools like Redux, React Router and Next.js that can be used to scale up UR Apps with advanced features like State Management. 
- TypeScript support makes the App more type safe and scalable. 
- Larger Community and Resources with support from facebook.

### Real world use cases
1. Dashboards and Admin panels
2. E-Commerce Product pages
3. Interactive Forms
4. Mobile Apps.(React Native)

### Software requirements
1. Install NODEJS.
2. Using npm U can install JSX Support for React.
```
node -v
npm -v

npx create-react-app my-app --template typescript
cd my-app
npm start
```  

### Using new Template
```
npm create vite@latest Sample-app --template react
npm install
npm run dev
```

