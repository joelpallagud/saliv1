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


