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
// Default Controller

// @Controller
// @RequestMapping("${openapi.theBookstore.base-path:/api/v1}")
// public class BooksApiController implements BooksApi {

//     private final NativeWebRequest request;

//     @Autowired
//     public BooksApiController(NativeWebRequest request) {
//         this.request = request;
//     }

//     @Override
//     public Optional<NativeWebRequest> getRequest() {
//         return Optional.ofNullable(request);
//     }

// }

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