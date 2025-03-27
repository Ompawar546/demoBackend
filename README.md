Express User Management API  

Setup and Installation  
1. Clone the repository  
2. Run `npm install`  
3. Start the server: `node app.js`

or you can use "https://demobackend-ajaw.onrender.com" to directly test using POSTMAN

API Endpoints  

Users Operations  

Get All Users  
- Method: GET  
- Endpoint: /users  
- Description: Retrieve all users  

Get Single User  
- Method: GET  
- Endpoint: /users/:id  
- Description: Retrieve a specific user by ID  

Create User  
- Method: POST  
- Endpoint: /users  
- Body Example:  
```json
{
  "name": "Om pawar",
  "email": "Demo@gmail.com"
}
```  

Update User  
- Method: PUT  
- Endpoint: /users/:id  
- Body Example:  
```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```  

Delete User  
- Method: DELETE  
- Endpoint: /users/:id  
- Description: Remove a user by ID  

Testing  
Use Postman or curl to test endpoints  
