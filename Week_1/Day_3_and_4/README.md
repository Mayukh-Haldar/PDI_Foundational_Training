# OpenAPI Bookstore – Python Flask and Java Spring Boot Implementation

## Project Overview

This project demonstrates OpenAPI-first development using OpenAPI Generator to create two server implementations of the same Bookstore API:

1. Python Flask Server
2. Java Spring Boot Server

Both servers are generated from the same `api_docs.yaml` file and implement identical CRUD operations for managing books using in-memory storage.

---

# Section 1 — Install OpenAPI Generator (via pip only)

## Install OpenAPI Generator

```
pip install openapi-generator-cli
```

Verify installation:

```
openapi-generator-cli version
```

---

# Section 2 — Python (Flask) Server Setup

## Step 1 — Generate Python Flask Server

```
openapi-generator-cli generate -i api_docs.yaml -g python-flask -o flask_server
```

This creates a folder named `flask_server`.

---

## Step 2 — Create Virtual Environment (Python 3.10)

Navigate inside:

```
cd flask_server
```

Create virtual environment:

```
py -3.x -m venv venv
```

Replace `3.x` with your installed Python version.

---

## Step 3 — Activate Virtual Environment

Windows:

```
venv\Scripts\activate
```

You should see `(venv)` in terminal.

---

## Step 4 — Install Dependencies

```
pip install -r requirements.txt
```

---

## Step 5 — Run Python Server

```
python -m openapi_server
```

---

## Swagger UI for Python Server

Open in browser:

```
http://localhost:8080/api/v1/ui/
```

---

## Python Internal Logic

File:

```
flask_server/openapi_server/controllers/default_controller.py
```

The following CRUD operations are implemented using an in-memory dictionary:

* GET /books
* POST /books
* GET /books/{bookId}
* PUT /books/{bookId}
* DELETE /books/{bookId}

Storage:

```
BOOKS_DB: Dict[int, Book] = {}
NEXT_ID = 1
```

Default Controller Code:
```Python
#Default Controller

import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from openapi_server.models.book import Book  # noqa: E501
from openapi_server import util


def books_book_id_delete(book_id):  # noqa: E501
    """Delete a book by its ID

     # noqa: E501

    :param book_id:
    :type book_id: int

    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return 'do some magic!'


def books_book_id_get(book_id):  # noqa: E501
    """Find a book by its ID

     # noqa: E501

    :param book_id:
    :type book_id: int

    :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
    """
    return 'do some magic!'


def books_book_id_put(book_id, body):  # noqa: E501
    """Update a book by its ID

     # noqa: E501

    :param book_id:
    :type book_id: int
    :param book:
    :type book: dict | bytes

    :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
    """
    book = body
    if connexion.request.is_json:
        book = Book.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def books_get():  # noqa: E501
    """Get a list of all books

     # noqa: E501


    :rtype: Union[List[Book], Tuple[List[Book], int], Tuple[List[Book], int, Dict[str, str]]
    """
    return 'do some magic!'


def books_post(body):  # noqa: E501
    """Add a new book

     # noqa: E501

    :param book:
    :type book: dict | bytes

    :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
    """
    book = body
    if connexion.request.is_json:
        book = Book.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
```

Replaced the default controller code with the following custom controller code:

```Python
# Custom Controller
import connexion
from typing import Dict, Tuple, Union, List
from openapi_server.models.book import Book
from openapi_server import util

# Temporary in-memory database
BOOKS_DB: Dict[int, Book] = {}
NEXT_ID = 1


def books_get() -> Union[List[Book], Tuple[List[Book], int]]:
    """Get a list of all books

     # noqa: E501


    :rtype: Union[List[Book], Tuple[List[Book], int], Tuple[List[Book], int, Dict[str, str]]
    """
    return list(BOOKS_DB.values()), 200


def books_post(body) -> Union[Book, Tuple[Book, int]]:
    """Add a new book

     # noqa: E501

    :param book: 
    :type book: dict | bytes

    :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        book = Book.from_dict(connexion.request.get_json())
    else:
        return {"message": "Invalid JSON"}, 400

    # If ID provided, use it
    if book.id is not None:
        if book.id in BOOKS_DB:
            return {"message": "ID already exists"}, 400
        BOOKS_DB[book.id] = book
        return book, 201

    # Otherwise auto-generate
    global NEXT_ID
    book.id = NEXT_ID
    BOOKS_DB[NEXT_ID] = book
    NEXT_ID += 1

    return book, 201


def books_book_id_get(book_id: int) -> Union[Book, Tuple[Dict, int]]:
    """Find a book by its ID

     # noqa: E501

    :param book_id: 
    :type book_id: int

    :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
    """
    book = BOOKS_DB.get(book_id)

    if not book:
        return {"message": "Book not found"}, 404

    return book, 200


def books_book_id_put(book_id: int, body) -> Union[Book, Tuple[Dict, int]]:
    """Update a book by its ID

     # noqa: E501

    :param book_id: 
    :type book_id: int
    :param book: 
    :type book: dict | bytes

    :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
    """

    if book_id not in BOOKS_DB:
        return {"message": "Book not found"}, 404

    if connexion.request.is_json:
        updated_book = Book.from_dict(connexion.request.get_json())
    else:
        return {"message": "Invalid JSON"}, 400

    updated_book.id = book_id
    BOOKS_DB[book_id] = updated_book

    return updated_book, 200


def books_book_id_delete(book_id: int) -> Tuple[None, int]:
    """Delete a book by its ID

     # noqa: E501

    :param book_id: 
    :type book_id: int

    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """

    if book_id not in BOOKS_DB:
        return {"message": "Book not found"}, 404

    del BOOKS_DB[book_id]
    return None, 204
```


Features:

* Auto-generates ID if not provided
* Allows custom ID if unique
* Returns 404 if book not found
* Returns 400 for invalid JSON
* Data resets on server restart

---

# Section 3 — Java Spring Boot Server Setup

## Step 1 — Generate Java Spring Server

```
openapi-generator-cli generate -i api_docs.yaml -g spring -o java_server
```

---

## Step 2 — Install Java JDK 17+

Download from:

[https://adoptium.net/](https://adoptium.net/)

Verify:

```
java -version
```

---

## Step 3 — Install Maven

1. Download from:
   [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

2. Extract to:
   Example:

   ```
   C:\Program Files\apache-maven-3.9.x
   ```

3. Set environment variable:

   ```
   MAVEN_HOME = C:\Program Files\apache-maven-3.9.x
   ```

4. Add to PATH:

   ```
   %MAVEN_HOME%\bin
   ```

5. Restart terminal

Verify:

```
mvn -version
```

---

## Step 4 — Run Java Spring Server

Navigate:

```
cd java_server
```

Run:

```
mvn spring-boot:run
```

---

## Swagger UI for Java Server

Open in browser:

```
http://localhost:8080/swagger-ui.html
```

---

## Java Internal Logic

File:

```
java_server/src/main/java/org/openapitools/api/BooksApiController.java
```

Implemented logic:

* Uses static `Map<Integer, Book>` as in-memory database
* Maintains `NEXT_ID` counter
* Overrides all methods from `BooksApi`
* Returns proper HTTP status codes:

  * 200 OK
  * 201 Created
  * 204 No Content
  * 404 Not Found
  * 400 Bad Request

Default Controller Code:

```Java
// Default Controller
package org.openapitools.api;

import org.openapitools.model.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.context.request.NativeWebRequest;

import javax.validation.constraints.*;
import javax.validation.Valid;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.annotation.Generated;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-02-22T18:23:51.347862200+05:30[Asia/Calcutta]", comments = "Generator version: 7.20.0")
@Controller
@RequestMapping("${openapi.theBookstore.base-path:/api/v1}")
public class BooksApiController implements BooksApi {

private final NativeWebRequest request;

@Autowired
public BooksApiController(NativeWebRequest request) {
this.request = request;
}

@Override
public Optional<NativeWebRequest> getRequest() {
return Optional.ofNullable(request);
}

}
```

Replaced Default Controller Code with the following Custom Controller Code:

```Java
// Custom Controller

package org.openapitools.api;

import org.openapitools.model.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.context.request.NativeWebRequest;

import javax.validation.constraints.*;
import javax.validation.Valid;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.annotation.Generated;

// Added Import
import java.util.*;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-02-22T18:23:51.347862200+05:30[Asia/Calcutta]", comments = "Generator version: 7.20.0")
@Controller
@RequestMapping("${openapi.theBookstore.base-path:/api/v1}")
public class BooksApiController implements BooksApi {

    private final NativeWebRequest request;

    private static final Map<Integer, Book> BOOKS_DB = new HashMap<>();
    private static int NEXT_ID = 1;

    @Autowired
    public BooksApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    // -------------------- GET ALL --------------------
    @Override
    public ResponseEntity<List<Book>> booksGet() {
        return ResponseEntity.ok(new ArrayList<>(BOOKS_DB.values()));
    }

    // -------------------- POST --------------------
    @Override
    public ResponseEntity<Book> booksPost(Book book) {

        if (book == null) {
            return ResponseEntity.badRequest().build();
        }

        if (book.getId() != null) {
            if (BOOKS_DB.containsKey(book.getId())) {
                return ResponseEntity.badRequest().build();
            }
            BOOKS_DB.put(book.getId(), book);
            return ResponseEntity.status(201).body(book);
        }

        book.setId(NEXT_ID);
        BOOKS_DB.put(NEXT_ID, book);
        NEXT_ID++;

        return ResponseEntity.status(201).body(book);
    }

    // -------------------- GET BY ID --------------------
    @Override
    public ResponseEntity<Book> booksBookIdGet(Integer bookId) {

        Book book = BOOKS_DB.get(bookId);

        if (book == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(book);
    }

    // -------------------- PUT --------------------
    @Override
    public ResponseEntity<Book> booksBookIdPut(Integer bookId, Book book) {

        if (!BOOKS_DB.containsKey(bookId)) {
            return ResponseEntity.notFound().build();
        }

        book.setId(bookId);
        BOOKS_DB.put(bookId, book);

        return ResponseEntity.ok(book);
    }

    // -------------------- DELETE --------------------
    @Override
    public ResponseEntity<Void> booksBookIdDelete(Integer bookId) {

        if (!BOOKS_DB.containsKey(bookId)) {
            return ResponseEntity.notFound().build();
        }

        BOOKS_DB.remove(bookId);
        return ResponseEntity.noContent().build();
    }
}
```

Endpoints implemented:

* GET /api/v1/books
* POST /api/v1/books
* GET /api/v1/books/{bookId}
* PUT /api/v1/books/{bookId}
* DELETE /api/v1/books/{bookId}

Note: Base path is `/api/v1` as defined in controller.

Data resets when server restarts.

---

# Section 4 — Testing the API

You can test using:

1. Swagger UI
2. Postman
3. Curl

Example curl:

```
curl http://localhost:8080/api/v1/books
```

---

# Section 5 — Common Errors

1. "python3.10 not recognized"

Use:

```
py -3.10
```

2. "mvn not recognized"

Maven bin folder not added to PATH.

3. "No plugin found for prefix spring-boot"

Make sure:

* You are inside `java_server`
* `pom.xml` exists in current directory

---

# API Summary

Both servers implement identical functionality:

* In-memory storage
* CRUD operations
* OpenAPI contract-driven development
* Swagger documentation
* Proper HTTP status handling

---

# Important Notes

* Do not edit generated interface files in Java.
* Implement logic only in:

  * `default_controller.py` (Python)
  * `BooksApiController.java` (Java)
* Data persistence is temporary.
* Regeneration may overwrite generated files.