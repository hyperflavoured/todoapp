var express = require('express');
var app = express();
var passport = require("passport");  
var passportJWT = require("passport-jwt");  
var users = require("../models/user.js");  
var ExtractJwt = passportJWT.ExtractJwt;  
var Strategy = passportJWT.Strategy;