describe("todos", () => {
  beforeEach(() => {
    cy.login();
  });

  // it("add todo", () => {
  //   cy.get("#title").type("Todo1");
  //   cy.findByRole("button", {
  //     name: /submit/i,
  //   }).click();

  //   cy.findByText(/todo1/i).should("exist");
  // });

  // it("remove todo", () => {
  //   cy.get("#title").type("Todo1");
  //   cy.findByRole("button", {
  //     name: /submit/i,
  //   }).click();

  //   cy.get("#title").type("Todo2");
  //   cy.findByRole("button", {
  //     name: /submit/i,
  //   }).click();

  //   cy.wait(2000);

  //   cy.get("[data-cy='todo-1']").within(() => {
  //     cy.findByRole("button", {
  //       name: /remove/i,
  //     }).click();
  //   });

  //   cy.findByText(/todo2/i).should("not.exist");
  // });

  it("user can add, check and delete todos", () => {
    cy.findByRole("textbox", {
      name: /title/i,
    })
      .type("Todo1")
      .type("{enter}");

    cy.findByRole("textbox", {
      name: /title/i,
    })
      .type("Todo2")
      .type("{enter}");

    cy.findByText(/todo1/i).should("exist");
    cy.findByText(/todo2/i).should("exist");
    cy.findByText(/total todos: 2/i).should("exist");
    cy.findByText(/total todos: 3/i).should("not.exist");

    cy.findByRole("checkbox", { name: /todo2/i }).check();

    cy.findByText(/selected todos: 1/i).should("exist");

    cy.get("[data-cy='todo-1']").within(() => {
      cy.findByRole("button", {
        name: /remove/i,
      }).click();
    });

    cy.findByText(/total todos: 1/i).should("exist");
  });
});
