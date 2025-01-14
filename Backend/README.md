# Backend Documentation

#### Method: POST

#### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) for authentication.

#### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A valid email address (required).
- `password`: A string with a minimum length of 8 characters (required).

Example:
- `user`(object):
- `fullname`:(object):
  - `firstname`:(string) A string with a minimum length of 3 characters (required).
  - `lastname`:(string) A string with a minimum length of 3 characters (optional).
- `email`: (string)A valid email address (required).
- `password`:(string) A string with a minimum length of 8 characters (required).