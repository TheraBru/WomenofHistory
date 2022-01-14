# Women of History

This project was created as a school project to practice using React aswell as Express and MongoDB for backend development.

## Getting started

To get this project working there are a couple of substeps that needs to be taken.

### Required backend
First of all you need a working api. You can find a git repo for the backend under the name of WomenofHistoryREST at my GitHub page. 

If you would like to create your own from the ground up you will need a NoSQL collection with documents containing schemas for name, years (born-died), quote, description, image (as a url) and category.

You will need full CRUD for the api with GET functionality for both every document aswell as every document within a specific category.

### Required changes in code
In order for the website to work as intended you need to change a few things in the code. First of all you need to replace the < your api-url > in all fetches with the correct url to your api. The documents affected are: FetchAll.js, FetchCat.js, AddNewArticle.js, Article.js and Update.js.

You will also need to change the login settings to something that fit you. You could also change the hard-coded login into database driven (which would be preffered for the current solution.) The login settings are located in following documents: AddNewArticle.js, Login.js and LoginButton.js.


