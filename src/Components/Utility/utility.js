import { toast } from "react-toastify";

// Get readBooks from localStorage
const getReadBooks = () => {
    const readBooks = localStorage.getItem("readBooks");
    if (readBooks) {
        return JSON.parse(readBooks);
    }
    return [];
};

// Save readBooks in localStorage
const saveReadBooks = (bookId) => {
    const booksSaved = getReadBooks();
    const isExist = booksSaved.find((b) => b === bookId);
    if (!isExist) {
        booksSaved.push(bookId);
        localStorage.setItem("readBooks", JSON.stringify(booksSaved));
        toast.success("Book Saved successfully", { autoClose: 500 });
    } else {
        toast.error("Book Already saved in Read", { autoClose: 500 });
    }
};

// Get wishList from localStorage
const getWishList = () => {
    const wishList = localStorage.getItem("wishList");
    if (wishList) {
        return JSON.parse(wishList);
    }
    return [];
};

// Save wishList in localStorage
const saveWishList = (wid) => {
    const wishList = getWishList();
    const alreadyRead = getReadBooks();
    const existsInWishList = wishList.find((id) => id === wid);
    const existsReadBook = alreadyRead.find((id) => id === wid);

    if (existsInWishList) {
        toast.error("Item already in wish list", { autoClose: 1000 });
    } else if (existsReadBook) {
        toast.warning("You've already read this book", { autoClose: 1000 });
    } else {
        wishList.push(wid);
        localStorage.setItem("wishList", JSON.stringify(wishList));
        toast.success("Book Add to wish list", { autoClose: 500 });
    }
};

export { saveReadBooks, getReadBooks, saveWishList, getWishList };
