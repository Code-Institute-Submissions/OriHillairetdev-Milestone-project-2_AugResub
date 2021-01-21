# Testing

## Code validators

[HTML Validator](https://validator.w3.org/) : 

- Home Page

![Home Page HTML Validator](/ReadmeFiles/HomeTest.png)



The warnings were ignored since they were design decisions. 

- Gallery Page

![GalleryPage HTML Validator](/ReadmeFiles/GalleryHtml.png)

- Contact Page

![Contact Page HTML Validator](/ReadmeFiles/ContactHtml.png)

The warning was ignored following design decisions.


[CSS Validator](https://jigsaw.w3.org//css-validator/) : the test didn't find any errors.

![CSS Validator](/ReadmeFiles/Csstest.jpg)

## Responsiveness

To test the responsiveness of the site I used [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) 
![Responsive Design](/ReadmeFiles/Testingres.jpg)

Notes:

- The design is responsive in most screen sizes. The only issue that I've found is that on a 10'' Notebook screen the jumbotron on "Home Page" might overflow a small bit.

## Browser compatibility

Browsers
* Chrome
* Edge
* Firefox 

Chrome and edge have no problems and loaded fast and with no problems everything was at the right scale and there where no problems 

Firefox had a strange delay where the Images took 2 seconds longer to load than on the other two browsers reason is unknown


## Testing User stories

- As an owner, I want to show off what we can do to attract more clients.
  - When the user is navigating the site, the first thing they will see is three examples of the studios work.
  - On the **Gallery** the user can see examples of different work that has been done.

- As an owner, I want to offer the possibility to book online to avoid unnecessary calls during busy hours.
  and
- As a person i want to be able to avoid calling to set up a commision.
  - The user can find a simple method to contact the studio on the **Contact page**.
  
- As a user, I want to be able to easily view social media accounts.
  - The user can access the social media links at the bottom of the ***Home** and **Contact page** .
  
- As a curious user, I want to be able to see examples of models.
  - The user can click on the **Gallery** page to view examples of all the work done.
  - There is also 3 examples on the **Home page** and more can be found in social media links.


## Bugs 

* The home page layout is unstable on all resolutions save my native one (Unfixed)
* The Footer section labled pricing cuts off and doesnt adjust to the xcreen size (unfixed)

* The containers for contacting the studios where not lining up and would move at different screen sizes (fixed)
        This was fixed by changing the margin and padding settings.

* Hero image was failing to load and when it did it would not fit the area it was meant to bit in (fixed)
    this was an error with the format and the way i was calling  it was fixed by redownloading and calling the image from the files



[Go back to README.md file](README.md).