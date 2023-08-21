function validateInput(title, description) {
    const errors = {};

    // Validasi title
    if (title.trim() === "") {
        errors.title = "Title cannot be empty";
    } else if (title.trim().length < 5) {
        errors.title = "Title must be at least 5 characters long";
    }

    // Validasi description
    if (description.trim() === "") {
        errors.description = "Description cannot be empty";
    }

    return errors;
}

export default validateInput;
