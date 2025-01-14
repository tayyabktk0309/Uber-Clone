# Backend Documentation

## User Registration Endpoint

### Endpoint: `/users/register`

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

## User Login Endpoint

### Endpoint: /users/login

## Method: POST

### Description:

This endpoint is used to authenticate a user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) for authentication if the credentials are valid.

### Request Body:

The request body should be a JSON object with the following fields:

- `email`: A valid email address (required).
- `password`: A string with a minimum length of 8 characters (required).

## User Profile Endpoint

### Endpoint: `/users/profile`

#### Method: GET

#### Description:
This endpoint retrieves the authenticated user's profile information. Requires a valid JWT token in the request header or cookie.

#### Authentication:
- Bearer Token in Authorization header OR
- Token in cookie

#### Responses:

##### Success (200):
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "user": {
      "_id": "USER_ID",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

## User Logout Endpoint

### Endpoint: `/users/logout`

#### Method: GET

#### Description:
This endpoint logs out the user by clearing the authentication token cookie and blacklisting the current token to prevent reuse.

#### Authentication Required:
- Bearer Token in Authorization header OR
- Token in cookie

#### Headers:
- `Authorization`: Bearer {token} (optional if using cookie)
- `Cookie`: token={token} (optional if using Authorization header)

#### Responses:

##### Success (200):
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }