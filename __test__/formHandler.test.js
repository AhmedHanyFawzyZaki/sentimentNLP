import { handleSubmit } from "../src/client/js/formHandler"


// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the existance of handleSubmit() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(handleSubmit).toBeDefined();
    })
    /*test("Testing handleSubmit() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        document.body.innerHTML =
        '<section>'+
        '<form class="" onsubmit="return handleSubmit(event)">'+
            '<input id="name" type="text" name="input" value="i love president sisi" required placeholder="Name">'+
            '<input type="submit" id="submitbtn" name="" value="submit" onclick="return handleSubmit(event)"'+
                'onsubmit="return handleSubmit(event)">'+
        '</form><section><section>'+
            '<strong>Form Results:</strong><div id="results"></div></section>';

        //document.getElementById('submitbtn').click();
        //expect(handleSubmit).toBeCalled();

        return handleSubmit().then(data => {
            expect(document.getElementById('results').innerHTML).not.toBeNull();
        });
    })*/
});