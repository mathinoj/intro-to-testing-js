// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
         expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
         expect(sayHello()).toBe("Hello, Jane!");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Alex" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    // it("should never return 'undefined' when called", function() {
    //     expect(helloWorld()).not.toBe(undefined);
    // });
});

//Step 1: In tests.js, assert that sayHello("Alex") returns "Hello, Alex!". Our first test should be super simple and super small. This means that our next test should look like expect(sayHello("Alex")).toBe("Hello, Alex!").
// Step 2: Run all tests and make sure that this newly added test is red.
// Step 3: It's challenging not to jump to the "correct" answer already, but let's stay close to the TDD method. Write just enough code to green the test. This means making sure that the sayHello function definition inside of code.js takes an an input argument. If input === "Alex", then we return "Hello, Alex!" else return "Hello, Jane!". Don't get too fancy. A cornerstone of TDD is refactoring only once you have a handful of green tests, not just one or two with new inputs.
// Step 4: Run all tests, expecting that all are now green. Does each test turn green? If so, then we can proceed. We can't refactor unless we have greened a test, even with a hard-coded implementation.
// Step 5: If you feel the urge to refactor already, hang on! Let's add one more test!
// Step 6: Repeat the TDD cycle, so let's add another test in the next exercise.


//Open your terminal and navigate to the local directory where you cloned this project.
// First, git status. Notice which files are tracked by git and which files have changes.
// Second, type git add -A to tell git that you want to get all the changed files staged for commit.
// Now, type git status. You should see file names in green. This means that the files are ready for commit.
// Next, type git commit -m "add the first test and solution for intro-to-testing"
// Type git status, again, to make sure that all files are added and committed.
// Finally, push your work by running git push. Pushing uploads your new commits to your remote repository, meaning your own fork on GitHub.