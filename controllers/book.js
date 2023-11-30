const bookModel = require("../Schemas/book");

exports.getAllBooks = async function (req, res) {
    try {
        const Books = await bookModel.find();
        return res.json({ message: "Done", data: Books });
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

exports.getBook = async function (req, res) {
    try {
        const Book = await bookModel.find({ _id: req.params.id });
        if (Book.length === 0) {
            return res.json({ message: "Not Found", data: Book });
        } else {
            return res.json({ message: "Done", data: Book });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};
exports.addBook = async function (req, res) {
    try {
        const Role = req.user.role;
        if (Role === "admin") {
            const CreatedBook = await bookModel.create(req.body);
            return res.json({ message: "Book Created", data: CreatedBook });
        } else {
            res.status(403).json({ message: "access denied" });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};
exports.updateBook = async function (req, res) {
    try {
        const Role = req.user.role;
        if (Role === "admin") {
            await bookModel.findByIdAndUpdate(req.params.id, req.body);
            return res.json({ message: "Book is Updated", data: [] });
        } else {
            res.status(403).json({ message: "access denied" });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

exports.deleteBook = async function (req, res) {
    try {
        const Role = req.user.role;
        if (Role === "admin") {
            await bookModel.findByIdAndDelete(req.params.id);
            return res.json({ message: "Book is deleted", data: [] });
        } else {
            res.status(403).json({ message: "access denied" });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};
