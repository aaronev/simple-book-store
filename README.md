<!-- https://github.com/GuildCrafts/web-development-js/blob/master/_goals/69-Simple_Book_Store.md -->

Day 1:
	- Understanding Express
	- Creating Data Table
	- Connecting Servers/Framework
Day 2:
 	- Understanding SQL
 	- Connecting SQL DB to HOST




  ## Description

Simple Bookstore is a web app to help a local bookstore  manage their inventory.

This simple content management system allows users to view, add, delete, and update books. Books entered in the system can be viewed in a list, as a single entry on its own page, or searched for using basic searches (by title, author, or genre).

Dependencies

- a _web application framework_ (we recommend [Express][])
- a _database_ (we recommend [PostgreSQL][])
- a tool for server-side _HTML templating_ (we recommend [Pug][])



[Sample CSV](https://gist.github.com/jaidevd/23aef12e9bf56c618c41).

## Specifications

- [x] Books have a title, author, and genre
- [x] Users can...
  - [x] Add books into the bookstore system via an admin page (_create_)
  - [x] See a list of books on the home page (_read_)
  - [x] Edit a book's title, author, or genre (_update_)
  - [x] Delete a book from the bookstore (_delete_)
  - [x] Search for books by title OR by author OR by genre (_read_)
  - [ ] View book details on a book detail page (_read_)
- [x] Lists of books are always paginated in groups of 10
- [ ] Book detail view is linked to from the listing and search pages
- [ ] Search results are presented in a new page
- [ ] Appropriate HTTP verbs are used for CRUD actions
  - [x] `GET` requests are only used for _read_ actions
  - [x] `POST` requests are only used for _create_ actions
  - [ ] `PUT` or `PATCH` requests are only used for _update_ actions
  - [ ] `DELETE` requests are only used for _delete_ actions
- [x] All views are rendered on the server using server-side templates written with [Pug][] or [EJS][]
- [x] Web server can be started with the command `npm start`
- [ ] Test suite can be run with the command `npm test`
- [x] All code submissions are peer reviewed via GitHub PR by at least one other member of the team
- [x] Master is always in a stable state (tests passing, site functions)
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

### Stretch

- [ ] App is deployed and live on the web (consider using Heroku)
- [x] All source code is written with ES6
- [ ] Users have their own account and can sign up and log in/out
- [ ] Users have one of three roles: `admin`, `clerk`, `reader`
  - [ ] Users with role `reader` can only view and search for books
  - [ ] Users with role `clerk` can edit books in addition to viewing/searching
  - [ ] Users with role `admin` can perform all actions (create, read, update, delete) with books
- [ ] Books have a price, cover image, publisher, and ISBN number

## Quality Rubric

- Code is well formatted without any linting errors [25 points]
- Variables, functions, CSS classes, etc. are meaningfully named\* [50 points]
- Functions are small and serve a single purpose [50 points]
- Code is well organized into a meaningful file structure [50 points]
- Code is reasonably tested with a test suite [50 points]
- Interface is user friendly [25 points]

\* _meaningfully named_ = no comments exist in code to explain functionality - the names serve that function.


Tools and libraries

- SQL modeling designer: http://ondras.zarovi.cz/sql/demo/
- [Express][] as a lightweight web server framework
- [PostgreSQL][] for data persistence
- [Pug][] for server-side templating
- [Bootstrap][] or [Pure.css][pure-css] for styling the UI

[express]: http://expressjs.com/
[postgresql]: https://www.postgresql.org/
[pug]: https://pugjs.org/
[ejs]: http://www.embeddedjs.com/
[bootstrap]: http://getbootstrap.com/
[pure-css]: https://purecss.io/
