"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _1 = require(".");
/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
var router = (0, express_1.Router)();
/**
 * Route serving list of users.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', _1["default"].findAll);
/**
 * Route serving a user
 * @name /v1/users/:id
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/find', _1["default"].findByEmail);
/**
 * Route serving a new user
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/create', _1["default"].create);
/**
 * Route serving a new user
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/update', _1["default"].updateByEmail);
/**
 * Route serving a new user
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path -Express path
 * @param {callback} middleware - Express middleware
 */
router["delete"]('/delete', _1["default"].deleteByEmail);
exports["default"] = router;
