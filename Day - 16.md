# Redux
- global state management library
- store management system
- communication between component
- store and manage all the application's states
![[Pasted image 20230113231318.png]]

##  Building block
### Store 
- The Redux store is the main, central bucket which stores all the states of an application.
	![[Pasted image 20230113231532.png]]

### Action
- If anyone wants to change the state of the application, then they'll need to express their intention of doing so by **emitting or dispatching an action**.
- On the click of the **"Add to Cart"** button, an action will be dispatched. This action is nothing but a JS object describing what changes need to be done in the store.

### Reducer
- To specify how the state tree is transformed by actions, we write pure reducers
 ![[Pasted image 20230113231824.png]]