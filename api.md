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

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
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

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "string"
}
```

### GET /activities

Request:

- headers: access_token (string)

Response:

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

Response:

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

### GET /activities/:id

Request:

- headers: access_token (string)

Response:

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

Response:

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

### PATCH /activities/:id

Request:

- headers: access_token (string)

Response:

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

### DELETE /activities/:id

Request:

- headers: access_token (string)

Response:

- status: 200
- body:
  ​

```json
{
  "message": "Activity deleted"
}
```
