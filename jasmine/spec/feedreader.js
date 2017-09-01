$(function() {

    //Check the RSS feeds data model
    describe('RSS Feeds', function() {

        //To check whether the allFeeds array is defined and at least one record is present
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //To make sure URL property is present for each record of RSS feeds and it is a valid URL
         it('URLs defined', function(){
           allFeeds.forEach(function(each){
             expect(each.url).toBeDefined();
             expect(each.url).not.toBe('');
           });
         });

         //To make sure name property is present for each record of RSS feeds and it is not empty string
         it('names defined', function(){
           allFeeds.forEach(function(each){
             expect(each.name).toBeDefined();
             expect(each.name).not.toBe('');
           });
         });
    });


    //Test suite on menu
    describe('The menu', function(){
      var body = document.body;
      var menuIcon= $('.menu-icon-link');

      //To check menu hidden by default
       it('hidden by default', function(){
         expect(body.className).toContain('menu-hidden');
       });

       // To check the menu icon open and hide when clicked on menu-icon-link
        it('menu changes visibility', function(){
          menuIcon.click();
          expect(body.className).not.toContain('menu-hidden');
          menuIcon.click();
          expect(body.className).toContain('menu-hidden');
        });

    });


    // Test suite named "Initial Entries"
    describe('Initial Entries', function(){

      //Make sure the asynchronous function run before handling the test
      beforeEach(function(done){
        loadFeed(0, function(){
          done();
        });
      });
      //To make sure at least a single .entry element within the .feed container
      it('success', function(done){
        expect(document.querySelector('.feed').getElementsByClassName('entry').length).toBeGreaterThan(0);
        done();
      });
    });

    describe('New Feed Selection', function(){

      var initialFeed;
      beforeEach(function(done) {
        loadFeed(0, function() {
          initialFeed = document.querySelector(".feed").innerHTML;

          loadFeed(1, function() {
            done();
          });
        });
      });

      it('content changed', function(done){
        expect(initialFeed).not.toBe(document.querySelector(".feed").innerHTML);
        done();
      });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
