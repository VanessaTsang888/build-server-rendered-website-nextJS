/*

Traditionally, a web app requires a trip to the server to fetch a web page when user clicks on a link. The NextJS web app converts
the web app into HTML on the server side, the browser then navigates the pages using Next link tags.
Example of completed app:
1. Home page with home page on left and resulting web page on right. There are 2 panels. My work will be done on the panel on left.

TASK 01: SETUP THE NEXT.JS PROJECT AND ANALYZ:

Use the instructions to install node. This is done for me as it can take time to do it.

Finally I will analyze the existing legacy app.

The sitter project in VSCode is created. Instructor used this command to create it: npx create-next-app sitter
This also installs the required React packages.

Go to the sitter directory and run this app using: 
-> cd sitter
-> npm run dev
This will start the node sever and serve the next pages

Open a web browser: bottom left icon -> navigate to: localhost:3000

Will see h1: Welcome to Next.js!
on the UI. This means NextJS is up and running. During development it will auto update pages for us as we go.

Look at the legacy app that we'll convert to use NextJS:
-> Desktop -> Stella complete -> rename files.
Open index.html in web browser to see the completed app.
The style is embeded in the html. Further down there is the navigation section which each page have this. We're going to take the style out
and put in to Next module so we can apply to all pages.
Next step we'll create index.js homepage with CSS and set up rendering in index.js

TASK 02: Create an index.js Page with CSS and set up Rendering in index.js

1. extract the CSS from the original app.
2. insert the CSS into Next CSS modules.
3. Modify the index.js to serve as the main page and import styles.

index.js -> logo -> Modify the class attribut to className. Do the same to other class to className.

TASK 03: How NextJS creates a route to a page:
Now we've seen how to create an index.js page with CSS.
Import navigation components into the NextJS app:
-> import Link from Next package.
-> Add a Link to the Home Page
-> Create a Next Page for the Contact page
-> Next automatically creates the route path.

TASK 04: Convert the existing web pages into Next Components to Render:
-> Add the Next Component pages
-> Create other Components using the content from the original web app.
-> Add the content from the Legacy App into each Next page.

TASK 05: Add Nav Links and CSS to each Component in the Next App and Test.
-> Add the remaining links to each page in index.js
-> Add styles to each Next page
-> Add the nav links to the other pages (so we can navigate back to previous page)
-> Test the app.





*/
