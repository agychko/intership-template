"use strict";
exports.__esModule = true;
var model_1 = require("./model");
/**
 * @exports
 * @method findAll
 * @param {}
 * @summary get list of all users
 * @returns Promise<UserModel[]>
 */
function findAll() {
    return model_1["default"].find({}).exec();
}
/**
 * @exports
 * @method findByEmail
 * @param {string} email
 * @summary get a user
 * @returns {Promise<UserModel>}
 */
function findByEmail(email) {
    return model_1["default"].findOne({ email: email }).exec();
}
/**
 * @exports
 * @method create
 * @param {object} profile
 * @summary create a new user
 * @returns {Promise<UserModel>}
 */
function create(profile) {
    return model_1["default"].create(profile);
}
/**
 * Find a user by id and update his profile
 * @exports
 * @method updateByEmail
 * @param {string} email
 * @param {object} newProfile
 * @summary update a user's profile
 * @returns {Promise<void>}
 */
function updateByEmail(email, newProfile) {
    return model_1["default"].updateOne({ email: email }, newProfile).exec();
}
/**
 * @exports
 * @method deleteByEmail
 * @param {string} email
 * @summary delete a user from database
 * @returns {Promise<void>}
 */
function deleteByEmail(email) {
    return model_1["default"].deleteOne({ email: email }).exec();
}
exports["default"] = {
    findAll: findAll,
    findByEmail: findByEmail,
    create: create,
    updateByEmail: updateByEmail,
    deleteByEmail: deleteByEmail
};
