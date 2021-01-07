# Staycation Guideline

## Link
https://documenter.getpostman.com/view/13589800/TVzNJzjH

## API DOC

List of available endpoints:
​
- `POST /register`
- `POST /login`
- `GET /activities`
- `POST /activities`
- `GET /activities/:id`
- `PUT /activities/:id`
- `PATCH /activities/:id`
- `DELETE /activities/:id`

### POST /register
Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response Success:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

Response Err validation email not email:

- status: 400
- body:
  ​

```json
{
    "message": "Must Be Email Format"
}
```

Response Err validation email empty:

- status: 400
- body:
  ​

```json
{
    "message": "Email must be filled"
}
```

Response Err validation password empty:

- status: 400
- body:
  ​

```json
{
    "message": "Password must be filled"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response Success:

- status: 200
- body:
  ​

```json
{
  "access_token": "string"
}
```

Response Err Wrong Pass or Email:

- status: 400
- body:
  ​

```json
{
    "message": "Email/Password Invalid"
}
```

### GET /activities

Request:

- headers: access_token (string)

Response Success:

- status: 201
- body:
  ​

```json
[
    {
        "id": "integer",
        "judul": "string",
        "deskripsi": "string",
        "alokasiWaktu": "integer",
        "status": "string",
        "UserId": "integer",
        "updatedAt": "string",
        "createdAt": "string"
    }
]
```

Response Err unauthenticate(No access_token):

- status: 400
- body:
  ​

```json
{
    "message": "Please login"
}
```

### POST /activities

Request:

- headers: access_token (string)

- data:

```json
{
    "judul": "string",
    "deskripsi": "string",
    "alokasiWaktu": "integer"
}
```

Response Success:

- status: 200
- body:
  ​

```json
{
    "id": "integer",
    "judul": "string",
    "deskripsi": "string",
    "alokasiWaktu": "integer",
    "status": "string",
    "UserId": "integer",
    "updatedAt": "string",
    "createdAt": "string"
}
```

Response Err unauthenticate(No access_token):

- status: 400
- body:
  ​

```json
{
    "message": "Please login"
}
```

### GET /activities/:id

Request:

- headers: access_token (string)

Response Success:

- status: 200
- body:
  ​

```json
{
    "id": "integer",
    "judul": "string",
    "deskripsi": "string",
    "alokasiWaktu": "integer",
    "status": "string",
    "UserId": "integer",
    "updatedAt": "string",
    "createdAt": "string"
}
```

Response Err unauthenticate(No access_token):

- status: 400
- body:
  ​

```json
{
    "message": "Please login"
}
```

Response Err unauthorized:

- status: 401
- body:
  ​

```json
{
    "message": "Unauthorized"
}
```

### PUT /activities/:id

Request:

- headers: access_token (string)

- data:

```json
{
    "judul": "string",
    "deskripsi": "string",
    "alokasiWaktu": "integer"
}
```

Response Success:

- status: 200
- body:
  ​

```json
{
    "id": "integer",
    "judul": "string",
    "deskripsi": "string",
    "alokasiWaktu": "integer",
    "status": "string",
    "UserId": "integer",
    "updatedAt": "string",
    "createdAt": "string"
}
```

Response Err unauthenticate(No access_token):

- status: 400
- body:
  ​

```json
{
    "message": "Please login"
}
```

Response Err unauthorized:

- status: 401
- body:
  ​

```json
{
    "message": "Unauthorized"
}
```

### PATCH /activities/:id

Request:

- headers: access_token (string)

Response Success:

- status: 200
- body:
  ​

```json
{
    "id": "integer",
    "judul": "string",
    "deskripsi": "string",
    "alokasiWaktu": "integer",
    "status": "string",
    "UserId": "integer",
    "updatedAt": "string",
    "createdAt": "string"
}
```

Response Err unauthenticate(No access_token):

- status: 400
- body:
  ​

```json
{
    "message": "Please login"
}
```

Response Err unauthorized:

- status: 401
- body:
  ​

```json
{
    "message": "Unauthorized"
}
```

### DELETE /activities/:id

Request:

- headers: access_token (string)

Response Success:

- status: 200
- body:
  ​

```json
{
  "message": "Activity deleted"
}
```

Response Err unauthenticate(No access_token):

- status: 400
- body:
  ​

```json
{
    "message": "Please login"
}
```

Response Err unauthorized:

- status: 401
- body:
  ​

```json
{
    "message": "Unauthorized"
}
```