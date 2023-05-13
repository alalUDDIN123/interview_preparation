## <center> REACT JS </center>

1. What is `reactJS`? why react is so `popular` ?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#1no)

2. What is the difference between state and props in ReactJS?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#2no)

3. what is pure component in react js?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#3no)

4. What is react fragment ? why it is used ?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#4no)

5. differences between `useMemo` and `useCallback`
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#5no)

6. What is `JSX` in ReactJS?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#6no)

7. What is the difference between `Element` and `Component`?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#7no)

8. How to bind `methods` or `event handlers` in JSX callbacks?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#8no)

9. Different between `controlled` and `uncontrolled` components?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#9no)

10. What are the different phases of `component lifecycle`?   
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#10no)

11. What are `Higher-Order components`?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#11no)

12. What are the `different ways to style a React component`?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#12no)

13. How to `pass data between react components`?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#13no)

14. What are Hooks?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#14no)

15. What are Context API and useContext Hook?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#15no)

16. what use cases of `useRef` hook? explain with example.
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#16no)

17. What are the `different ways to handle events` in ReactJS?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#17no)

18. What is `Redux` and `how does it work` with ReactJS?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#18no)

19. What are the `best practices to follow while using ReactJS`?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#19no)

20. different between `local Storage` and `session Storage` ?
     - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/main/reactjs#20no)
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
| Definition     | state is a mutable object that is used to store data | props are basically used to passed data from parent to child |
| Mutability     | Mutable can be changed using `setState()` method | Immutable cannot be changed within the component |
| Scope          | Local to a component; cannot be accessed outside of it | Can be accessed by the child components that receive them |
| Rendering      | Changes trigger a re-render of the component | Changes trigger a re-render of the parent component that passed the props |



---
# 3.No
  - A pure component in React is a component that renders the same output for the same props and state. This means that if the props and state of a pure component do not change, the component will not re-render. This can improve the performance of your application by preventing unnecessary re-renders.


# 4.No
  - A React fragment is a syntax that allows to return multiple elements from a React component without wrapping them in an extra DOM node.
    - If we want to use multiples elements or component in a component then it should must be used. 

# 5.No 

1. `useCallback()` is a react hook that is used to memoize a function and optimize its performance.

2. The main use case for `useCallback()` is to optimize the performance of child components that depend on a function that is passed down from a parent component.

3. The useCallback Hook only runs when passed function or dependency changed 

1. `useMemo()` is also a react hook that is used to memoize value and optimize its performance.

2. The main use case for `useMemo()` is to optimize the performance of the application.
3. The useMemo Hook only runs when one of its dependencies is updated




