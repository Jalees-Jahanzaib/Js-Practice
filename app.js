  "
const range = document.querySelector('input(type="text")')
VM1408:1 Uncaught DOMException: Failed to execute 'querySelector' on 'Document': 'input(type="text")' is not a valid selector.
    at <anonymous>:1:24
(anonymous) @ VM1408:1
const lol = document.querySelector('input(type="text")')
VM1419:1 Uncaught DOMException: Failed to execute 'querySelector' on 'Document': 'input(type="text")' is not a valid selector.
    at <anonymous>:1:22
(anonymous) @ VM1419:1
const lol = document.querySelector('input(password="text")')
VM1424:1 Uncaught SyntaxError: Identifier 'lol' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM1424:1
const lol2 = document.querySelector('input(password="text")')
VM1430:1 Uncaught DOMException: Failed to execute 'querySelector' on 'Document': 'input(password="text")' is not a valid selector.
    at <anonymous>:1:23
(anonymous) @ VM1430:1
const lol2 = document.querySelector('input[type="password"]')
VM1454:1 Uncaught SyntaxError: Identifier 'lol2' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM1454:1
const lol3 = document.querySelector('input[type="password"]')
undefined
lol3.placeholder="let's Rock"
"let's Rock"