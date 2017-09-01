Instructons:

Download all the files and open index.html. You can see jamsine test suites on the page. Test suites in green indicates they are passed. If any test unit is in red, then the page not passed that test suite. To play with the tests, read the below steps I did and edit the code. For example, to fail the URL test spec delete URL for any object inside the allFeed array or delete the URL property itself.

Used Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

1. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.

2. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

3. Wrote a new test suite named `"The menu"`. Wrote a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

4. Wrote a test suite named `"Initial Entries"`. Wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

5. Wrote a test suite named `"New Feed Selection"`. Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

