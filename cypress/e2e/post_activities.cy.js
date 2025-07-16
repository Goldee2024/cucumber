describe('POST /api/v1/Activities', () => {
  const baseUrl = 'https://fakerestapi.azurewebsites.net';

  it('should create a new activity with valid data', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        id: 1,
        title: 'Test Activity',
        dueDate: '2023-10-10T10:00:00Z',
        completed: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title', 'Test Activity');
      expect(response.body).to.have.property('dueDate', '2023-10-10T10:00:00Z');
      expect(response.body).to.have.property('completed', true);
    });
  });

  it('should return an error for invalid data types', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        id: 'invalid_id',
        title: 'Test Activity',
        dueDate: '2023-10-10T10:00:00Z',
        completed: true,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should return an error for missing required fields', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        title: 'Test Activity',
        dueDate: '2023-10-10T10:00:00Z',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });
});