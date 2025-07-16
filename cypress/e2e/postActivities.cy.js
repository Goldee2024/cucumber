describe('POST /api/v1/Activities', () => {
  const baseUrl = 'https://fakerestapi.azurewebsites.net';

  it('should create a new activity successfully', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        id: 1,
        title: 'New Activity',
        dueDate: '2025-03-12T18:51:53.98Z',
        completed: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title', 'New Activity');
      expect(response.body).to.have.property('dueDate', '2025-03-12T18:51:53.98Z');
      expect(response.body).to.have.property('completed', true);
    });
  });

  it('should fail when id is not an integer', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        id: 'invalid',
        title: 'New Activity',
        dueDate: '2025-03-12T18:51:53.98Z',
        completed: true,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail when dueDate is not in date-time format', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        id: 1,
        title: 'New Activity',
        dueDate: 'invalid-date',
        completed: true,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail when completed is not a boolean', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/v1/Activities`,
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      body: {
        id: 1,
        title: 'New Activity',
        dueDate: '2025-03-12T18:51:53.98Z',
        completed: 'invalid',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });
});