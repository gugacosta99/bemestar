const Sequelize = require('sequelize');

module.exports = err => {

    if (err instanceof Sequelize.ValidationError) {
        return {
            error: true,
            message: err.errors.map(e => e.message)  // Include specific validation messages
        };
    }
    
    // Check if the error is a Sequelize unique constraint error
    if (err instanceof Sequelize.UniqueConstraintError) {
        return {
            error: true,
            message: 'Duplicate entry. This value already exists.'
        };
    }
    
    // Check if it's a foreign key constraint error
    if (err instanceof Sequelize.ForeignKeyConstraintError) {
        return {
            error: true,
            message: 'Invalid foreign key reference.'
        };
    }

    return {
        error: false,
        message: 'Validado'
    }
}