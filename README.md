# user-search
## Search if a user exists in the system using email address.
 This application is developed using the following technologies: HTML5, CSS3, Bootstrap4, Javascript, JQuery and is responsive.
 Responsive webpages are developed. An email is entered in the input box, and it is checked for validation. If it is valid, then on clicking the "GO" button, it makes an Ajax call with the email address in query string parameter and the result is displayed on the next page. 

The application is deployed and hosted in a publicly accessible site https://user-searchbyemail.netlify.app

The API will respond to anyone of these email addresses with valid data, when you search,please try searching with the following emails:
 * jonsmith@example.com
 * janesmith@example.com
 * doesmith@example.com

Description:
Designed two responsive views. One is the email search view with validation and the second view is the result screen, where the results are displayed. 
In the first view, the email is validated and once the “GO” button is clicked, the view is directed to the result view bypassing the email value in the query parameter string.
Used header and footer templates in both screens. Also used ES6 templates with back -ticks for populating the “0 Results” view, “1 Result found” view.
Also made Ajax call on page load with async and await. “Loading image” appears on the result view, while waiting for the response. Once the response is received, the result view is populated accordingly. While in the result view, the search view can be accessed by clicking the “search icon” on the right side of the navigation menu.
