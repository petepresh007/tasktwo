## A Person's API that stores person's details
# Model - The Schema is made up of the following fields
* name
* age
* nationality
# An endpoint for carrying out CRUD operation have been included, see below
# You can create, read, update and delete data following the process below

# Make a post request to create a person
* visit http:localhost:3000/api
* send post request using this format {"name":"person_name", "age":person_age, "nationality":"person_nationality"}

# Make get request to get all the created people
* visit http:localhost:3000/api
* send a get request.

# Make a get request to get a single person
* visit http:localhost:3000/api/user_id
* send a get request

# Update a person
* visit http:localhost:3000/api/user_id
* send a patch request using this format {"field_to_be_updated": value}

# Delete a person
* visit http:localhost:3000/api/user_id
* send a delete request