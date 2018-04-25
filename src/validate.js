import validation from "validate.js"
import constraints from "./validation"

export default function validate(field, value) {
    var formValues = {}

    formValues[field] = value

    var formFields = {}
    formFields[field] = constraints[field]

    const result = validation(formValues, formFields)

    if (result) {
	    return result[field][0]
    }

    return null
}

export function confirmPassword(value1, value2)
{
    const result = validation({password: value1, confirmPassword: value2}, {confirmPassword: {equality: "password"}} )

    if (result) {
	    return result["confirmPassword"][0]
    }

    return null
}


