class Request {
    constructor(id, name, description, amount, currency, employee_name, status, created_at, updated_at, approved_amount, type) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.currency = currency;
        this.employee_name = employee_name;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.approved_amount = approved_amount;
        this.type = type;
    }
}

module.exports = Request;
