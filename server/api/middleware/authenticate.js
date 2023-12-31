const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your secret key
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}

module.exports = authenticate;




// const jwt = require('jsonwebtoken');

// function authenticate(req, res, next) {
//     const token = req.header('x-auth-token');
//     if (!token) return res.status(401).send('Access denied. No token provided.');

//     try {
//         const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your secret key
//         req.user = decoded;
//         next();
//     } catch (ex) {
//         res.status(400).send('Invalid token.');
//     }
// }

// module.exports = authenticate;
