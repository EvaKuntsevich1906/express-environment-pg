const isValidEnvironmentId = (req, res, next)  => {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('ID is NaN(Not a Number)');
    if (id < 0) throw new Error('ID сannot be less than 0');
    next()
}

const isValidBody =(req, res, next) => {
    const { label, category, priority } = req.body;
    if (!label) throw new Error('absent label');
    if (!category) throw new Error('absent category');
    if (!priority) throw new Error('absent priority');

    if (!isNaN(label)) throw new Error('label should be a string');
    if (!isNaN(category)) throw new Error('category should be a string');
    if (isNaN(priority)) throw new Error('priority is NaN (Not a Number)');
    next()
}

module.exports = { isValidEnvironmentId, isValidBody };