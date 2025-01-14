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
  ```

## Captain Registration Endpoint

### Endpoint: `/captains/register`

#### Method: POST

#### Description:

This endpoint registers a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns a JSON Web Token (JWT) for authentication.

#### Request Body:

The request body should be a JSON object with the following fields:

- `captain`:(object):
 - `fullname`:(object)
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with a minimum length of 8 characters (required)
- `vehicle`:(object)
  - `color`: A string with a minimum length of 3 characters (required)
  - `plate`: A string with a minimum length of 3 characters (required)
  - `capacity`: A number, minimum value of 1 (required)
- `vehicletype`: One of: 'car', 'motorcycle', 'bicycle' (required)

Example Request Body:

```json
{
  "fullname": {
    "firstname": "John_test",
    "lastname": "Driver_test"
  },
  "email": "johnTest.driver@example.com",
  "password": "password_test",
  "vehicle": {
    "color": "test",
    "plate": "TEST",
    "capacity": 4,
    "vehicletype": "TEST"
  }
},
```

## Responses:

## Success (201):

## Status Code: 201 Created

### Response Body:

```json
{
  "token": "JWT_TOKEN_HERE",
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Driver"
    },
    "email": "john.driver@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicletype": "car"
    },
    "status": "active"
  }
}
```
