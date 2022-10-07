import { transformToNumber } from './nums'

it('should transform a string number to a number of type number', () => {
    const input = '1'

    const result = transformToNumber(input)

    expect(result).toBe('number')
})

it('TODO: Task 3 goes here', () => {
    // Arrange
    // create a variable with a string value that is a valid number, e.g. '1'

    let nine = '9'


    // Act
    // call the transformToNumber function on an input value and assign the result to a variable

    let result = transformToNumber(nine)

    // Assert
    // use the expect function to assert that the result is equal to the expected result

    expect(result).toBe(9)
})

it('TODO: Task 4 goes here', () => {
    // Arrange
    const input = 'invalid'
    const input2 = {}

    // Act
    // for each input value, call the transformToNumber function on an input value and assign the result to a variable

    let firstInput = transformToNumber(input)

    let secondInput = transformToNumber(input2)

    // Assert
    // for each result value, use the expect function to assert that the result is equal to NaN, use toBeNaN function

    expect(firstInput).toBeNaN()
    expect(secondInput).toBeNaN()
})