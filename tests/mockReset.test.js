it("MockReset [UNIT]", () => {
  // Define a mock function
  const myMockFunction = jest.fn();

  // Use the mock function in a test
  myMockFunction("arg1");
  console.log(myMockFunction.mock.calls); // Outputs [['arg1']]

  // Reset the state of the mock function
  myMockFunction.mockReset();
  console.log(myMockFunction.mock.calls); // Outputs []
});
