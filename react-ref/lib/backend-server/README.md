### 1. **GET all books**
```bash
curl http://localhost:1234/books
```

### 2. **GET book by ID**
```bash
curl http://localhost:1234/books/1
```

### 3. **POST - Create new book**
```bash
curl -X POST http://localhost:1234/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "pub_year": 1925,
    "genere": "Fiction",
    "status": "available"
  }'
```

### 4. **PUT - Update a book**
```bash
curl -X PUT http://localhost:1234/books/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby - Updated",
    "author": "F. Scott Fitzgerald",
    "pub_year": 1925,
    "genere": "Classic Fiction",
    "status": "borrowed"
  }'
```

### 5. **DELETE a book**
```bash
curl -X DELETE http://localhost:1234/books/1
```
