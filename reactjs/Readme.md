## <center> REACT JS </center>

1. What is `reactJS`? why react is so `popular` ?
2. What is the difference between state and props in ReactJS?
3. what is pure component in react js?
4. What is react fragment ? why it is used ?
5. differences between `useMemo` and `useCallback`
--- 
# 1.No
  - ReactJS is a JavaScript library used to build user interfaces.

    - `React is popular for a number of reasons, including:`
      - `Easy to learn` : React is a relatively simple library to learn, even for beginners
      - `Reusability` :  React is component-based architecture which enables developers to create reusable UI components that can be used across different parts of the application.
      - `Virtual DOM` : React uses a virtual DOM, which is a lightweight copy of the actual DOM. This enables React to update the UI efficiently and minimize the number of DOM manipulations needed, resulting in better performance and faster rendering.
      - `large community` :  React has a large and active community of developers who are constantly creating new tools and resources to help you learn and use React
      
---
# 2.No

|    Feature            | State                      | Props                      |
| -------------- | --------------------------| --------------------------|
| Definition     | Internal state of a component | Properties passed to a component from its parent |
| Mutability     | Mutable; can be changed using `setState()` method | Immutable; cannot be changed within the component |
| Scope          | Local to a component; cannot be accessed outside of it | Can be accessed by the child components that receive them |
| Rendering      | Changes trigger a re-render of the component | Changes trigger a re-render of the parent component that passed the props |



---
# 3.No
  - A pure component in React is a component that renders the same output for the same props and state. This means that if the props and state of a pure component do not change, the component will not re-render. This can improve the performance of your application by preventing unnecessary re-renders.


# 4.No
  - A React fragment is a syntax that allows to return multiple elements from a React component without wrapping them in an extra DOM node.
    - If we want to use multiples elements or component in a component then it should must be used. 

# 5.No 
  differences between `useMemo` and `useCallback`
|  | `useMemo` | `useCallback` |
| --- | --- | --- |
| What it does | Memoizes a value or a computation | Memoizes a function |
| When to use it | When you have a costly computation that should only be run when its dependencies change | When you have a function that you want to memoize so that it doesn't re-render unnecessarily |
| Signature | `const memoizedValue = useMemo(() => computeExpensiveValue(dependency), [dependency]);` | `const memoizedCallback = useCallback(() => {doSomethingWithDependency(dependency)}, [dependency]);` |
| Dependency array | List of values that the computation depends on | List of values that the function depends on |
| Return value | Memoized value or computation | Memoized function |
| Re-evaluation | Re-evaluates when any dependency changes | Re-creates the function when any dependency changes |
| Use case example | Memoizing the result of a complex calculation in a component | Memoizing a callback function that is passed as a prop to a child component |
| Optimization goal | Reduce the number of times the computation is performed | Reduce the number of times the function is re-created |
| Performance impact | Can improve performance by preventing unnecessary re-calculation of expensive computations | Can improve performance by preventing unnecessary re-renders caused by re-creation of the same function |
| Not recommended for | Memoizing event handlers or callbacks | Memoizing values or computations (use `useMemo` instead) | 

