describe('Authors API - POST method', () => {
  const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Authors';

  it('should create a new author with valid data', () => {
    const newAuthor = {
      id: 0,
      idBook: 1,
      firstName: "John",
      lastName: "Doe"
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: newAuthor
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.idBook).to.eq(newAuthor.idBook);
      expect(response.body.firstName).to.eq(newAuthor.firstName);
      expect(response.body.lastName).to.eq(newAuthor.lastName);
    });
  });

  it('should accept null values for firstName and lastName', () => {
    const newAuthor = {
      id: 0,
      idBook: 2,
      firstName: null,
      lastName: null
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: newAuthor
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.idBook).to.eq(newAuthor.idBook);
      expect(response.body.firstName).to.be.null;
      expect(response.body.lastName).to.be.null;
    });
  });

  it('should handle non-integer idBook', () => {
    const newAuthor = {
      id: 0,
      idBook: "not-an-integer",
      firstName: "Jane",
      lastName: "Doe"
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: newAuthor,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('should handle very long string inputs', () => {
    const longString = 'a'.repeat(1000);
    const newAuthor = {
      id: 0,
      idBook: 3,
      firstName: longString,
      lastName: longString
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      headers: {
        'Content-Type': 'application/json; v=1.0'
      },
      body: newAuthor
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.idBook).to.eq(newAuthor.idBook);
      expect(response.body.firstName).to.eq(newAuthor.firstName);
      expect(response.body.lastName).to.eq(newAuthor.lastName);
    });
  });
});