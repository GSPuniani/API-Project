# api-project

Custom, authenticated API built on top of the [Ergast F1 API](http://ergast.com/mrd/), which contains Formula 1 records dating back to 1950. This project tracks queries made to this F1 API; specifically, requests for results from a specific season and round.

## API Calls

### GET 
If the user uses "/", it will pull all the queries in the database and display.

### POST 
If the user uses "/createQuery", it will add a new query in the database.

### PUT
If the user uses "/updateQuery", it will update the specified query in the database.

### DELETE
If the user uses "/deleteQuery", it will remove the specified query in the database.

## Installation

1. Fork this repository and clone your fork locally.
1. Open the repository folder in your editor of choice:

    ```bash
    $ cd api-project
    $ code .
    ```

1. Run `npm install` to install project dependencies into the activated environment.
1. Execute `npm start` to run the development server.


## Deployment

### Heroku

This project has been deployed live on Heroku. It can be viewed by simply clicking the following link: https://bew1-3-custom-api.herokuapp.com. 

