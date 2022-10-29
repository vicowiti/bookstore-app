export const useApi = () => {
  const getBooks = async () => {
    const data = await fetch("https://fudap-books-api.herokuapp.com/books/");

    let jsonData = await data.json();

    return jsonData;
  };

  return getBooks;
};
