const {addBookHandler, getAllBooksHandler, getBookbyIdHandler, updateBookHandler, deleteBookHandler} = require('./handlers');

const routes = [
    {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
    },
    {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
    },
    {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookbyIdHandler
    },
    {
    method: 'PUT',
    path: '/books/{bookIdd}',
    handler: updateBookHandler
    },
    {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler
    }
]

module.exports = routes;