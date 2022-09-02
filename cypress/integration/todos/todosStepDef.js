 ///<reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import TodosLocator from '../../support/pageObjects/TodosLocators'

const todoLocator= new TodosLocator()
let task
var arraylabels=[]

 //Given I open Todos Page
 Given('I open Todos Page',()=>
{
    cy.visit(Cypress.env('url'))
})

//When I fill the todo task details
When('I fill the todo task details',function(dataTable)
{
for (let i = 0; i < dataTable.rawTable.length; i++) {
task = (String)(dataTable.rawTable[i])
todoLocator.getnewtodo().type((String)(dataTable.rawTable[i])).type('{enter}')
 }
})

 //Then validate the task created
 Then('validate the task created',()=>
 {
 var arraylabels=[]
 todoLocator.getLabel().each((el,index) => {
         arraylabels.push(el.text());
      }).then((el) => {
         expect(arraylabels).includes(task)
      })
 })

 //Then validate the duplicate task is not created
 Then('validate the duplicate task is not created',()=>
 {
  todoLocator.getLabel().each(el => {
          arraylabels.push(el.text());
       }).then(() => {
          expect(arraylabels).not.to.includes(task)
       })
  })

  //And I double on a task and edit it
  And('I double click on a task and edit it',function(dataTable)
  {
   task = (String)(dataTable.rawTable[0])
       todoLocator.getLabel().each(($e1,index) => {
       cy.get('label').eq(index).invoke('html', task);

  })
  })


  //Then validate the edited task
  Then('validate the edited task',()=>
   {
     cy.get('label').should('include.text',task)
     assert.isNotNull(cy.get('label'))
   })

   //And I will click on the toggle button
   And('I will click on the toggle button',()=>
   {
    todoLocator.getToggle().each(($e1,index) => {
           todoLocator.getToggle().eq(index).click()
   })
})

   // Then validate the completed task
   Then('validate the completed task',()=>{
    cy.get('.completed').should('include.text',task)
   })

   //  And I will click on the destroy button
   And('I will click on the destroy button',function(dataTable){
    task= dataTable.rawTable[0]
   // todoLocator.getdelete().each(($e1,index) => {
       todoLocator.getdelete().eq(0).click({ force: true })
   })


    //  Then validate the deleted task
    Then('validate the deleted task',()=>{
    cy.get('.view').should('not.include.text',task)
    })

    //And click on clear completed link
    And('click on clear completed link',()=>{
    todoLocator.getclearCompleted().click()
    })

    //Then validate that all the completed task are deleted
    Then('validate that all the completed task are deleted',()=>{
    todoLocator.getLabel().should('not.include.text',task)
    })

    // And I will click on the toggle button for a particular task
    And('I will click on the toggle button for a particular task',function(dataTable){
     task= (String)(dataTable.rawTable[0])
    todoLocator.getLabel().each(($e1,index) => {
    if($e1.text()===task)
    todoLocator.getToggle().eq(index).click()
     })
    })

    //Then verify the items left count
    Then('verify the items left count',()=>{
    todoLocator.getCountleft().children().should('have.text',2)
    })


