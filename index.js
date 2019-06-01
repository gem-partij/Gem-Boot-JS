require("module-alias/register");

const express = require("express");
const router = require("@routers/router");
const plugins = require("@config/plugins");

const App = require("gemboot").Application;
const gemboot = new App(router(express.Router()), plugins);

gemboot.start();
