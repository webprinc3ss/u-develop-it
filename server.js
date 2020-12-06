//Import Express
const express = require('express');

//PORT designation and the app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




// Default response for any other request(Not Found) Catch all - Put close to end!
app.use((req, res) => {
    res.status(404).end();
});

// Start Express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});