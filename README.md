# A Person's API that stores person's details
## Model - The Schema is made up of the following fields
* name
* age
* nationality
## An endpoint for carrying out CRUD operation have been included, see below
## You can create, read, update and delete data following the process below

## base URL 
*  https://tasktwo-u833.onrender.com

## Make a post request to create a person
* visit https://tasktwo-u833.onrender.com/api
* send post request using this format {"name":"person_name", "age":person_age, "nationality":"person_nationality"}

## Make get request to get all the created people
* visit https://tasktwo-u833.onrender.com/api
* send a get request.

## Make a get request to get a single person
* visit https://tasktwo-u833.onrender.com/api/user_id
* Where user_id is the "id" for the user
* send a get request

## Update a person
* visit https://tasktwo-u833.onrender.com/api/user_id
* Where user_id is the "id" for the user
* send a patch request using this format {"field_to_be_updated": value} e.g. {"name":"John"}

## Delete a person
* visit https://tasktwo-u833.onrender.com/api/user_id
* Where user_id is the "id" for the user
* send a delete request