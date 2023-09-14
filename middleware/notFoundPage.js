const notFoundPage = (req, res, next) => res.status(404).json({ msg: "404 Error, page not found" });
module.exports = notFoundPage;