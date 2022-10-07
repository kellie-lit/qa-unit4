import {add} from './checkErrors'


it('TODO: task 3 goes here', () => {
    // Arrange
  
    let emptyArr = []

    // Act
  
    function errCheck(emptyArr){
      if (emptyArr.length === 0) {
        let emptyArrError = 'The array is empty'
        return emptyArrError

    // Assert

    expect(errCheck).toThrow(emptyArrError)
  }
  }
  
  })
  
  it('TODO: task 4 goes here', () => {
    // Arrange and Act
    // create a function that calls the add function without any arguments and assign it to a variable
  
    // Assert
    // use the expect function to assert that the function throws an error, use toThrow function
  })