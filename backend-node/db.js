
let db = [
    {
        "id": 1,
        "name": "Purchase Request 1",
        "description": "Request to purchase office supplies",
        "amount": 100,
        "currency": "USD",
        "employee_name": "John Doe",
        "status": "Pending",
        "created_at": "2024-07-19T08:30:00.000Z",
        "updated_at": null,
        "approved_amount": 90
    },
    {
        "id": 2,
        "name": "Reimbursement Request 1",
        "description": "Reimbursement for travel expenses",
        "amount": 150,
        "currency": "EUR",
        "employee_name": "Jane Smith",
        "status": "Approved",
        "created_at": "2024-07-18T10:15:00.000Z",
        "updated_at": "2024-07-20T14:20:00.000Z",
        "approved_amount": 140
    },
    {
        "id": 3,
        "name": "Purchase Request 2",
        "description": "Request to purchase new laptops",
        "amount": 80,
        "currency": "USD",
        "employee_name": "Alice Johnson",
        "status": "Pending",
        "created_at": "2024-07-17T12:45:00.000Z",
        "updated_at": null,
        "approved_amount": 75
    },
    {
        "id": 4,
        "name": "Reimbursement Request 2",
        "description": "Reimbursement for conference fees",
        "amount": 120,
        "currency": "EUR",
        "employee_name": "Bob Brown",
        "status": "Approved",
        "created_at": "2024-07-16T09:00:00.000Z",
        "updated_at": "2024-07-18T11:30:00.000Z",
        "approved_amount": 110
    },
    {
        "id": 5,
        "name": "Purchase Request 3",
        "description": "Request to purchase marketing materials",
        "amount": 200,
        "currency": "USD",
        "employee_name": "Eve Green",
        "status": "Pending",
        "created_at": "2024-07-15T14:20:00.000Z",
        "updated_at": null,
        "approved_amount": 180
    },
    {
        "id": 6,
        "name": "Reimbursement Request 3",
        "description": "Reimbursement for team building event",
        "amount": 90,
        "currency": "EUR",
        "employee_name": "Chris White",
        "status": "Approved",
        "created_at": "2024-07-14T11:10:00.000Z",
        "updated_at": "2024-07-17T16:45:00.000Z",
        "approved_amount": 85
    },
    {
        "id": 7,
        "name": "Purchase Request 4",
        "description": "Request to purchase software licenses",
        "amount": 110,
        "currency": "USD",
        "employee_name": "Grace Black",
        "status": "Pending",
        "created_at": "2024-07-13T09:30:00.000Z",
        "updated_at": null,
        "approved_amount": 105
    },
    {
        "id": 8,
        "name": "Reimbursement Request 4",
        "description": "Reimbursement for client entertainment",
        "amount": 180,
        "currency": "EUR",
        "employee_name": "David Gray",
        "status": "Approved",
        "created_at": "2024-07-12T13:00:00.000Z",
        "updated_at": "2024-07-15T17:00:00.000Z",
        "approved_amount": 170
    },
    {
        "id": 9,
        "name": "Purchase Request 5",
        "description": "Request to purchase office furniture",
        "amount": 95,
        "currency": "USD",
        "employee_name": "Emma Brown",
        "status": "Pending",
        "created_at": "2024-07-11T16:45:00.000Z",
        "updated_at": null,
        "approved_amount": 90
    },
    {
        "id": 10,
        "name": "Reimbursement Request 5",
        "description": "Reimbursement for training course",
        "amount": 130,
        "currency": "EUR",
        "employee_name": "Frank Johnson",
        "status": "Approved",
        "created_at": "2024-07-10T08:00:00.000Z",
        "updated_at": "2024-07-13T10:30:00.000Z",
        "approved_amount": 120
    },
    {
        "id": 11,
        "name": "Purchase Request 6",
        "description": "Request to purchase office chairs",
        "amount": 300,
        "currency": "USD",
        "employee_name": "Michael Brown",
        "status": "Pending",
        "created_at": "2024-07-28T08:24:09.007Z",
        "updated_at": null,
        "approved_amount": 0,
        "type": "Purchase Request"
    },
    {
        "id": 12,
        "name": "Purchase Request 12",
        "description": "Request to purchase office chairs",
        "amount": 305,
        "currency": "USD",
        "employee_name": "Michael Brow34",
        "status": "Pending",
        "created_at": "2024-07-28T08:25:26.048Z",
        "updated_at": null,
        "approved_amount": 0,
        "type": "Purchase Request"
    },
    {
        "id": 13,
        "name": "Purchase Request 12",
        "description": "Request to purchase office chairs",
        "amount": 305,
        "currency": "USD",
        "employee_name": "Michael Brow34",
        "status": "Pending",
        "created_at": "2024-07-28T08:52:00.820Z",
        "updated_at": null,
        "approved_amount": 0,
        "type": "Purchase Request"
    },
    {
        "id": 14,
        "name": "Purchase Request 12",
        "description": "Request to purchase office chairs",
        "amount": 305,
        "currency": "USD",
        "employee_name": "Michael Brow34",
        "status": "Pending",
        "created_at": "2024-07-28T08:52:16.464Z",
        "updated_at": null,
        "approved_amount": 0,
        "type": "Purchase Request"
    }
];

let nextId = 15;

module.exports = { db, nextId };
