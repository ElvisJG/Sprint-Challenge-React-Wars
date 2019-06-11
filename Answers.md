# Answers

1.  What is React JS and what problems does it try and solve?

    ReactJS solves a data problem, when there is continous data being fed from an API or different arrays it quickly generates dynamic content. It also makes code very reusable since React is component based.

1.  What does it mean to _think_ in react?

    Thinking in React means thinking in components. An app is at the bottom of a pyramid and all the components must be fed into App. This means if you need access to different props you must drill down or have them accessible in the scope of that component.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A stateful component/class holds it's own state and can dynamically present information to a user by changing it's state (Without needing to change the state of the entire application). A function/presentation component, like the one used in this sprint simply presents information given from an API/Object.

1.  Describe state.

    State is an mutable object within react. We've used it to hold both const objects and in this project an object supplied by an API.

1.  Describe props.

    Props is short for properties, it's a way to pass information from state throughout your application.
