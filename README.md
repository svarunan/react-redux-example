##  ReactJS using Redux for Global store

Folder structure

	/redux 
		/actions 
		/reducers 
		/store 
	Home page has 3 components running.
Operations performed:

	Insert,List,Delete,Search
Installation and Run

	npm install && npm start
	
**Redux!**

Why?
 - It can maintain the global store and state for all the components
 - Easy to push a data from one component to Global store and make it reflect in another component
 - Actions, reducers and store participate to help achieve this.

When?

Use Redux only of you have more than one component running in a page view and if you want to reflect data from one comp to another comp. Otherwise react's setState should easily work.
