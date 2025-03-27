const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());


let users = [
  { id: 1, name: 'Om', email: 'ompawar3000@gmail.com' },
  { id: 2, name: 'raj', email: 'raj45@gmail.com' }
];


app.get('/users', (req, res) => {
  res.json(users);
});



app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json(user);
});



app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});



app.put('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[index] = {
    ...users[index],
    name: req.body.name || users[index].name,
    email: req.body.email || users[index].email
  };

  res.json(users[index]);
});



app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const deletedUser = users.splice(index, 1)[0];
  res.json(deletedUser);
});



app.listen(port, () => {
  console.log(`Server running on ${port}`);
});