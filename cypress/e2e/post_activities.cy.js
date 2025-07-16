describe('POST /api/v1/Activities', () => {
  const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';

  it('should create a new activity successfully with valid data', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        id: 1,
        title: 'Sample Activity',
        dueDate: '2025-03-12T18:51:53.98Z',
        completed: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title', 'Sample Activity');
      expect(response.body).to.have.property('dueDate', '2025-03-12T18:51:53.98Z');
      expect(response.body).to.have.property('completed', true);
    });
  });

  it('should return an error when invalid data types are provided', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        id: 'invalid_id', // Invalid data type
        title: 12345, // Invalid data type
        dueDate: 'invalid_date', // Invalid format
        completed: 'not_boolean', // Invalid data type
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should return an error when required fields are missing', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        // Missing required fields
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });
});