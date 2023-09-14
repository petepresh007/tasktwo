const Person = require("../model/person");
const express = require("express");
const router = express.Router();

/**ROUTES WITH NO PARAMS GET & CREATE */

router.route("/").post(async (req, res) => {
    const { name, age, nationality } = req.body;

    /**HANDLING EMPTY SUBMISSION */
    if (!name || !age || !nationality) {
        res.status(400).json({ msg: "All fields are required" });
    }

    const newPerson = new Person({ name, age, nationality });
    await newPerson.save();

    if (!newPerson) {
        res.status(500).json({ msg: "something went wrong..." })
    }
    return res.status(201).json({ msg: newPerson });
})
    .get(async (req, res) => {
        const person = await Person.find({});
        if (!person) {
            res.status(404).json({ msg: "No person was found" });
        }
        return res.status(200).json({ msg: person });
    })

/**ROUTE WITH PARAMS */
/**GET USERS, UPDATE USERS & DELETE USERS */

router.route("/:id").get(async (req, res) => {
    const { id } = req.params;

    const person = await Person.find({ _id: id });
    if (!person) {
        res.status(404).json({ msg: `No user with the id ${id}` });
    }
    return res.status(200).json({ msg: person });
})
    .patch(async (req, res) => {
        const { params: { id }, body: { name, age, nationality } } = req;

        const updatedUser = await Person.findByIdAndUpdate({ _id: id }, { name, age, nationality });
        if (!updatedUser) {
            res.status(404).json({ msg: `No user with the id ${id}` });
        }
        return res.status(200).json({ msg: "Person has been updated successfully. Now, you send a request to get all users" });
    })
    .delete(async (req, res) => {
        const { id } = req.params;

        const removeUser = await Person.findOneAndRemove({ _id: id });
        if (!removeUser) {
            res.status(404).json({ msg: `No user with the id ${id}` });
        }
        return res.status(200).json({ msg: `person with the id: ${id} have been removed successfully` });

    });


module.exports = router;