describe('Activities API - POST method', () => {
  const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';

  it('should create a new activity successfully', () => {
    const newActivity = {
      id: 0,
      title: 'Test Activity',
      dueDate: '2023-06-15T10:00:00Z',
      completed: false
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: newActivity
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq(newActivity.title);
      expect(response.body.dueDate).to.eq(newActivity.dueDate);
      expect(response.body.completed).to.eq(newActivity.completed);
    });
  });

  it('should accept an activity with null title', () => {
    const activityWithNullTitle = {
      id: 0,
      title: null,
      dueDate: '2023-06-15T10:00:00Z',
      completed: false
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: activityWithNullTitle
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.be.null;
    });
  });

  it('should handle invalid date format', () => {
    const activityWithInvalidDate = {
      id: 0,
      title: 'Invalid Date Activity',
      dueDate: 'invalid-date',
      completed: false
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: activityWithInvalidDate,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('should handle invalid data type for completed field', () => {
    const activityWithInvalidCompleted = {
      id: 0,
      title: 'Invalid Completed Activity',
      dueDate: '2023-06-15T10:00:00Z',
      completed: 'not a boolean'
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: activityWithInvalidCompleted,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});