/*
this file contains all the vendor libraries used in our project. This is used
by webpack in production build only. a separate bundle for vendor code is
useful since it's unlikely to chage as often as he applications code. So all
the libraries are referenced here will be written to vendor.js so that they can
be cached until one of them chages. that prevents the customer from downloading
code every time chages to the app are made.

*/
/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';