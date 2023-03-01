# React-Redux

<br/>

## Redux

Redux is a library to facilitate state management. It gives range of features to create, update store, add and remove entities inside. Thanks to the organized flow and tools it allows to combine it with important operations like communicating with backend and update subscribers. For React library usually react-redux library is used to increase compatibility and developer experience.
<br/>

## Flow

Whenever user want to change value in the store has to **dispatch** the particular (for the change) **action**. The dispatch sends action to the **reducer** that has written exact change that has to be done for the type action along with optional values passed to dispatch. Reducer then updates the **store** and all the clients that subscribed for this type of change are notified and updated. More over, during the process between dispatching an action and passing it to reducer, additional **middleware** can be run in order to do (i.e. asynchronous) necessary operations like sending data to backend/database or fetching data. The action sent to middleware is called thunk. After the async operations in middleware, action is dispatched to reducer that updates the store.
<br/>

## toolkit/redux

Redux toolkit is a library that shares a lot of useful utilities to avoid boilerplate code that has to be written with clear react-redux library.
