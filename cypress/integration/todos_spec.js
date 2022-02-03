describe("todos", () => {
  beforeEach(() => {
    cy.visit("/");
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
});
