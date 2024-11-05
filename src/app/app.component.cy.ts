import { AppComponent } from "./app.component";

describe('AppComponent', () => {

  afterEach(() => {
    cy.screenshot({
      overwrite: true,
    });
  });

  it('should mount', () => {
    cy.viewport(1024, 100);
    cy.mount(AppComponent);
  });

});
