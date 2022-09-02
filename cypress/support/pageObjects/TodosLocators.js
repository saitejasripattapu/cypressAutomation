/// <reference types="Cypress" />
class TodosLocator
{
getnewtodo()
{
return cy.get('.new-todo')
}
getLabel()
{
return cy.get('label')
//cy.get('.view input label')
}

getToggle()
{
return cy.get('.toggle')
}

getdelete()
{
return cy.get('.destroy')}

getCountleft()
{
return cy.get('.todo-count')}

getclearCompleted()
{
return cy.get('.clear-completed')}
}
export default TodosLocator;