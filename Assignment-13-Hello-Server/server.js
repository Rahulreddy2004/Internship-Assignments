const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Set the response header to tell the browser we are sending HTML
    res.setHeader('Content-Type', 'text/html');

    const path = req.url;

    if (path === '/' || path === '/home') {
        res.statusCode = 200;
        res.end('<h1>Welcome Home!</h1><p>This is the main server route.</p>');
    } 
    else if (path === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Us</h1><p>We are running a Node.js Hello Server!</p>');
    } 
    else if (path === '/contact') {
        res.statusCode = 200;
        res.end('<h1>Contact Page</h1><p>Email us at: dev@internship.com</p>');
    } 
    else {
        // Handle 404 - Not Found
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1><p>The route you are looking for does not exist.</p>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});