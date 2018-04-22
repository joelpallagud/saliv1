const validation = {
    email: {
	presence: {
	    message: "E-mail cannot be blank"
	},
	email: {
	    message: "Enter a valid E-mail address"
	}
    },

    password: {
	presence: {
	    message: "Password cannot be blank"
	},
	length: {
	    minimum: 5,
	    message: "Your password is too short"
	}
    },

    phone: {
	presence: {
	    message: "Phone cannot be blank",
	},
	length: {
	    minimum: 10,
	    message: "Please follow the valid phone format: 9XXXXXXXXX"
	},
	format: {
	    pattern: "[0-9]+",
	    flags: "i",
	    message: "Please follow the valid phone format: 9XXXXXXXXX"
	}
    }
}

export default validation
