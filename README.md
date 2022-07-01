# ToDo API

A demo app for Todo API configuration.

## Installation
1. Clone the repository `git clone git@github.com:neu-mis-info6150-fall-2019/assignment-8-darshan-dedhia.git`.
2. Navigate to project directory `cd assignment-8-darshan-dedhia`.
3. Run `npm install`.

## API Standards
* [RESTful URLs](#restful-urls)
* [HTTP Verbs](#http-verbs)
* [Responses](#responses)

## RESTful URLs

### General guidelines for RESTful URLs
* A URL identifies a resource.
* URLs should include nouns, not verbs.
* Use plural nouns only for consistency (no singular nouns).
* Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements.
* You shouldn’t need to go deeper than resource/identifier/resource.
* Put the version number at the base of your URL, for example http://example.com/v1/path/to/resource.
* URL v. header:
    * If it changes the logic you write to handle the response, put it in the URL.
    * If it doesn’t change the logic for each response, like OAuth info, put it in the header.
* Specify optional fields in a comma separated list.
* Formats should be in the form of api/v2/resource/{id}.json

### Good URL examples
* List of Todo Items
    * GET http://localhost:3000/todo
* Filtering Todo by Object ID:
    * GET http://localhost:3000/todo/:objectID
* Add a new Todo item to the list:
    * POST http://localhost:3000/todo/

### Bad URL examples

* Verb in URL:
    * http://localhost:3000/todo/:objectID/create
* Filter outside of query string
    * http://localhost:3000/todo/:objectID/desc

## HTTP Verbs

HTTP verbs, or methods, should be used in compliance with their definitions under the [HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) standard.
The action taken on the representation will be contextual to the media type being worked on and its current state. Here's an example of how HTTP verbs map to create, read, update, delete operations in a particular context:

| HTTP METHOD | POST            | GET       | PUT         | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE          | READ      | UPDATE      | DELETE |
| /todo       | Create new todo | List todo | NA	  | NA     |
| /todo/1234  | NA		| Get todo  | If exists, update todo; If not, error | Delete todo |



## License
[MIT License](https://opensource.org/licenses/MIT)


