HaTTiP-Scripts
==============

Scripts to use for the [HaTTiP web services client](http://pilgrimagesoftware.com/products/hattip)

All scripts included here are free to use. If you have any you would like to add, please 
fork this repository and submit a pull request with your contribution.


Usage
---

1. In the Script Library window (Menu -> Window -> Script Library), click the `+` button to 
   create a new script.
2. Enter the name of the script. For `Library Entry` scripts, this usually isn't significant.
   For a `Snippet` script, you will need this name for the `Script` field in the request with
   which you want to use this script.
3. For a `Library Entry` script, set the `Order`. Lower numbers are ordered first during 
   script processing.
4. Set the `Language` for the script. All `Library Entry` scripts of a particular language 
   are included when processing a `Snippet` script.
5. Enter the script into the body field.
6. In the request window, enter the script in the `Script` field. The name must match exactly
   with the `Snippet` script you want to use. Only `Snippet` scripts may be used here.


Scripts
---

[Base64](Base64.js) - Encode and decode strings as base64

[BasicAuth](BasicAuth.js) - Create an Authorization header for Basic authentication. Requires Base64.js.