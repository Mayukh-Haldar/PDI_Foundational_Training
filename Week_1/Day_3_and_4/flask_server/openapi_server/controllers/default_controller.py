# Default Controller

# import connexion
# from typing import Dict
# from typing import Tuple
# from typing import Union

# from openapi_server.models.book import Book  # noqa: E501
# from openapi_server import util


# def books_book_id_delete(book_id):  # noqa: E501
#     """Delete a book by its ID

#      # noqa: E501

#     :param book_id: 
#     :type book_id: int

#     :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
#     """
#     return 'do some magic!'


# def books_book_id_get(book_id):  # noqa: E501
#     """Find a book by its ID

#      # noqa: E501

#     :param book_id: 
#     :type book_id: int

#     :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
#     """
#     return 'do some magic!'


# def books_book_id_put(book_id, body):  # noqa: E501
#     """Update a book by its ID

#      # noqa: E501

#     :param book_id: 
#     :type book_id: int
#     :param book: 
#     :type book: dict | bytes

#     :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
#     """
#     book = body
#     if connexion.request.is_json:
#         book = Book.from_dict(connexion.request.get_json())  # noqa: E501
#     return 'do some magic!'


# def books_get():  # noqa: E501
#     """Get a list of all books

#      # noqa: E501


#     :rtype: Union[List[Book], Tuple[List[Book], int], Tuple[List[Book], int, Dict[str, str]]
#     """
#     return 'do some magic!'


# def books_post(body):  # noqa: E501
#     """Add a new book

#      # noqa: E501

#     :param book: 
#     :type book: dict | bytes

#     :rtype: Union[Book, Tuple[Book, int], Tuple[Book, int, Dict[str, str]]
#     """
#     book = body
#     if connexion.request.is_json:
#         book = Book.from_dict(connexion.request.get_json())  # noqa: E501
#     return 'do some magic!'


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
