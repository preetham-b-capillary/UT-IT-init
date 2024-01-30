const myModule = require("./testModule");
it("My test [UNIT]", () => {
  // Spy on the method using jest.spyOn
  const spy1 = jest.spyOn(myModule, "myFunction");

  // Mock the implementation for testing purposes
  spy1.mockImplementation(() => "Mocked implementation");

  // Perform some tests using the mocked implementation
  console.log(myModule.myFunction()); // Outputs 'Mocked implementation'

  // Now, restore the original implementation using mockRestore
  spy1.mockRestore();
  const spy2 = jest.spyOn(myModule, "myFunction");

  // After restoring, subsequent calls to the original function
  console.log(myModule.myFunction()); // Outputs 'Original implementation'
  spy2.mockImplementation(() => "Mocked implementation");
  console.log(myModule.myFunction()); // Outputs 'Mocked implementation'
  spy1.mockRestore();
  console.log(myModule.myFunction()); // Outputs 'Original implementation'
});

it("Compute UT", () => {
  // Spy on the divide method
  const divideSpy = jest.spyOn(myModule, "divide");

  // Mock the implementation of divide for testing purposes
  divideSpy.mockImplementation((a, b) => `Mocked result: ${a / b}`);

  // Perform some tests using the mocked divide method
  console.log(myModule.divide(10, 2)); // Outputs 'Mocked result: 5'

  // Now, restore the original implementation of divide
  divideSpy.mockRestore();

  // After restoring, subsequent calls to the original divide method
  console.log(myModule.divide(10, 2)); // Outputs 5 (original implementation)
});
