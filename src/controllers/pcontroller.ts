// Connection to the Model/Database.
import express from "express";

export const home = async (req, res: express.Response, next) => {
    await res.render("index", { title: "Price Cards" });
};

