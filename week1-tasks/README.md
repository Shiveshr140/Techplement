<!--------------------------- File structure --------------------------------->

<!-- Home Page -->

index.html
style/home.css, style/assets(images/logos)
javascript/nav.js(common for all pages)
javascript/home.js and javascript/modal.js(for pop up windows for course cards)

<!-- Course Detail Page -->

courseDetail.html
style/courseDetail.css, style/assets(images/logos)
javascript/nav.js(common for all pages)
javascript/courseDetail.js

<!------------------------ 1. Header ----------------------------------->

Common for both home page and course detail page javascript/nav.js

<!-- 1.1 Header info  -->

Fully responsive header info
This is kind of of info card at the header for info about explore it has closs button

<!-- 1.2  Nav  -->

Fully responsive Nav
It is common to all pages, it has Logo search input(just to show will not do anything) then cart, wishlist, notification and profile button/log if you click these they will pop up a card.

<!------------------------- 2. Main  ---------------------------------------->
<!-- 2.1 Home page -->

js: javascript/home.js and javascript/modal.js, css:style/home.css

Fully responsive
It has all course cards having translate hover effect, if click each of these card they will pop up modal window with transparent black background other than this modal window. Modal window has preview video, course title, rating, description, learn more and close button.

lean more will navigate you to another page that course detail which is common to all course card

<!-- 2.2 Course Detail page -->

html: courseDetail.html, js: javascript/courseDetail.js, style: style/courseDetail.css

Fully responsive
This page has course detail which is common to all courses you can navigate to this page through learn more in header info and modal window in after click the course card.
It has various modal windows which are having different content, they will open after clicking the links available inside the cards. For enroll for free button form will appear just for show this will not work.

<!------------------------ 3. assets  ------------------->

style/assets
It has all images and logos that I have used in the application
