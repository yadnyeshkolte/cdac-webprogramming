import React from "react";
import { useState, useEffect } from "react";
import { LibraryService } from "../services/libraryservices";
export default function LibBook() {
  const [library, setLibrary] = useState([]);
  const [book, setBooks] = useState();

  useEffect(() => {
    LibraryService.getAll().then(setLibrary);
  }, []);

  function handleAdd() {
    if (
      !book?.title ||
      !book?.pub_year ||
      !book?.genere ||
      !book?.author ||
      !book?.status
    ) {
      alert("Enter all the fields");
      return;
    }
    const bookData = {
      ...book,
      status: book.status === "Yes" ? 1 : 0,
    };

    LibraryService.add(bookData).then(() => {
      LibraryService.getAll().then(setLibrary);
    });
    setBooks({});
  }

  function handleDelete(book_id) {
    LibraryService.delete(book_id).then(() => {
      LibraryService.getAll().then(setLibrary);
    });
  }

  const handleChange = (e) => {
    setBooks({ ...book, [e.target.name]: e.target.value });
  };
  const handleClear = () => {
    setBooks({});
  };

  function handleEdit() {
    console.log(book);
    if (
      !book?.title ||
      !book?.pub_year ||
      !book?.genere ||
      !book?.author ||
      !book?.status
    ) {
      alert("You fucking dumb! Just edit what is given");
      return;
    }
    const bookData = {
      ...book,
      status: book.status === "Yes" ? 1 : 0,
    };

    LibraryService.update(bookData).then(() => {
      LibraryService.getAll().then(setLibrary);
    });
  }

  const onChangeEdit = (e) => {
    setBooks({
      book_id: e.book_id,
      title: e.title,
      author: e.author,
      pub_year: e.pub_year,
      genere: e.genere,
      status: e.status === 1 || e.status === "1" ? "Yes" : "No", // Convert tinyint to "Yes"/"No"
    });
  };

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-8">
            {" "}
            {/*remember to remove it */}
            <div className="container row ">
              {library.map((c) => {
                return (
                  <div
                    key={c.book_id}
                    className="card text-start col-md-3 mx-4 mb-2 bg-info-subtle"
                  >
                    <div className="card-body">
                      <button
                        className="btn btn-link position-absolute top-0 end-0 text-danger p-2"
                        onClick={() => {
                          handleDelete(c.book_id);
                        }}
                      >
                        <i className="fa-solid fa-trash"></i> {/*delete One */}
                      </button>

                      <button
                        className="btn btn-link position-absolute top-40 end-0 text-info p-2 mt-3"
                        onClick={() => {
                          onChangeEdit(c);
                        }}
                      >
                        <i className="fa-solid fa-pen"></i> {/*Update One */}
                      </button>

                      <h4 className="card-title">{c.title}</h4>
                      <div className=" card-body p-md-0">
                        <p>
                          <b>Author: </b>
                          {c.author}
                        </p>
                        <p>
                          <b>Year: </b>
                          {c.pub_year}
                        </p>
                        <p>
                          <b>Genere: </b>
                          {c.genere}
                        </p>
                        <p>
                          <b>Available: </b>
                          {c.status === 1 || c.status === "1" ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            {/*remember to remove it */}
            <div className="container mt-2">
              <h3 className="">Add/Update Books</h3>
              <hr />
              <div className="mb-3">
                <input
                  value={book?.title || ""}
                  type="text"
                  className="form-control"
                  name="title"
                  aria-describedby="helpId"
                  placeholder="Enter the Title"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  value={book?.author || ""}
                  type="text"
                  className="form-control"
                  name="author"
                  aria-describedby="helpId"
                  placeholder="Enter the Author"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  value={book?.pub_year || ""}
                  type="number"
                  className="form-control"
                  name="pub_year"
                  aria-describedby="helpId"
                  placeholder="Enter Year"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  value={book?.genere || ""}
                  type="text"
                  className="form-control"
                  name="genere"
                  aria-describedby="helpId"
                  placeholder="Enter Genere"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <b className="mx-3">Available :</b>
                </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="availableYes"
                    value="Yes"
                    name="status"
                    checked={book?.status === "Yes"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="availableYes">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="availableNo"
                    value="No"
                    name="status"
                    checked={book?.status === "No"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="availableNo">
                    No
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={handleAdd}
              >
                Add
              </button>

              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleEdit}
              >
                Update
              </button>

              <button
                type="button"
                className="btn btn-success mx-2"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
