# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
A token is used to make security decisions and to store tamper-proof information about some system entity. While a token is generally used to represent only security information, it is capable of holding additional free-form data that can be attached while the token is being created.

2. What steps can you take in your web apps to keep your data secure? Keep software up to date,enforce strong password,encrypt login pages,keep clean,scan for vulabilities.

3. Describe how web servers work.
On a web server, the HTTP server is responsible for processing and answering incoming requests. Upon receiving a request, an HTTP server first checks if the requested URL matches an existing file. If so, the web server sends the file content back to the browser. If not, an application server builds the necessary file.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create = PUT with a new URI
         POST to a base URI returning a newly created URI
Read   = GET
Update = PUT with an existing URI
Delete = DELETE