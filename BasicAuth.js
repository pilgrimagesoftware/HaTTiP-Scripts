/**
 *  Name: Basic Auth
 *  Type: Snippet
 *  Language: Javascript
 */
 
var username="username";
var password="password";

var base64=Base64.encode(username+":"+password);

headers["Authorization"] = "Basic " + base64;
