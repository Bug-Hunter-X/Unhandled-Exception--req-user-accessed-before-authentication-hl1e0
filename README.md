# Unhandled Exception in Express.js Application

This repository demonstrates a common error in Express.js applications where an unhandled exception occurs due to accessing `req.user` before authentication.

## Description
The `bug.js` file contains an Express.js application that attempts to access the `req.user` object in a route handler before verifying if the user is authenticated. This results in an error if the request doesn't contain user information, causing the application to crash.

## Solution
The `bugSolution.js` file provides a corrected version of the code.  It addresses the error by using middleware to check if the user is authenticated before proceeding to the route handler.

## How to reproduce
1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` (This will cause an error).
4. Run `node bugSolution.js` (This will work correctly).

## Note:
This example assumes a simple scenario.  In a real-world application, authentication and authorization would be implemented with more robust solutions such as Passport.js or similar libraries.