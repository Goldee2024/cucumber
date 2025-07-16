describe('POST /api/v1/Activities', () => {
  const baseUrl = 'https://fakerestapi.azurewebsites.net';

  it('should create a new activity successfully', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: {
        id: 1,
        title: 'Test Activity',
        dueDate: '2025-03-12T18:51:53.98Z',
        completed: false
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title', 'Test Activity');
      expect(response.body).to.have.property('dueDate', '2025-03-12T18:51:53.98Z');
      expect(response.body).to.have.property('completed', false);
    });
  });

  it('should fail when sending invalid data type for id', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: {
        id: 'invalid_id',
        title: 'Test Activity',
        dueDate: '2025-03-12T18:51:53.98Z',
        completed: false
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail when sending invalid data type for dueDate', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: {
        id: 1,
        title: 'Test Activity',
        dueDate: 'invalid_date',
        completed: false
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail when sending invalid data type for completed', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: {
        id: 1,
        title: 'Test Activity',
        dueDate: '2025-03-12T18:51:53.98Z',
        completed: 'not_boolean'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });
});