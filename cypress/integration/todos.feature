Feature: End to end todos

  @Testcase1 @CreateSingleTask
  Scenario: Creating a  single to-do task
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
    Then validate the task created

  @TestCase2 @CreateMultipleTasks
  Scenario: Creating multiple to-do tasks
    Given I open Todos Page
    When I fill the todo task details
      | What needs to be done? |
      | sdwedwed               |
      | 2323212                |
    Then validate the task created

  @Testcase3 @CreateDuplicateTasks
  Scenario: Creating duplicate to-do tasks
    Given I open Todos Page
    When I fill the todo task details
      | same task |
      | same task |
    Then validate the duplicate task is not created

  @TestCase4 @CreatetaskinForeignLanguage
  Scenario: Creating  task in foreign language
    Given I open Todos Page
    When I fill the todo task details
      | hoe is het met je |
      | आप कैसे हो        |
    Then validate the task created

  @TestCase5 @CreateAnEmptyTask
  Scenario: Creating an empty task
    Given I open Todos Page
    When I fill the todo task details
      | '' |
    Then validate the task created

  @TestCase6 @CreateaLengthyTask
  Scenario: Creating a lengthy task
    Given I open Todos Page
    When I fill the todo task details
      | abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz |
    Then validate the task created


  @TestCase7  @EditTask
  Scenario: Edit a task
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
    And I double click on a task and edit it
      | edit task |
    Then validate the edited task


  @TestCase8 @EditTask
  Scenario: Edit a task and delete the task name
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
    And I double click on a task and edit it
      |  |
    Then validate the edited task

  @TestCase9 @EditTask
  Scenario: Edit a completed task
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
    And I will click on the toggle button
    And I double click on a task and edit it
      | dcdfv |
    Then validate the edited task


  @TestCase10 @CompleteTask
  Scenario: Complete a task
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
    And I will click on the toggle button
    Then validate the completed task


  @TestCase11 @CompleteTask
  Scenario: Complete a list of tasks
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
      | sdsdfef             |
      | third task          |
    And I will click on the toggle button
    Then validate the completed task


  @TestCase12 @DeleteTask
  Scenario: Delete a particular task
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
      | sdsdfef             |
    And I will click on the destroy button
      | my first to to task |
    Then validate the deleted task

  @TestCase12 @DeleteTask
  Scenario: Delete a completed task
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
      | sdsdfef             |
    And I will click on the toggle button
    And I will click on the destroy button
      | my first to to task |
    Then validate the deleted task

  @TestCase13 @ClearCompleted
  Scenario: Verify the Clear completed link
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
      | sdsdfef             |
    And I will click on the toggle button for a particular task
    |sdsdfef|
    And click on clear completed link
    Then validate that all the completed task are deleted


  @TestCase14 @itemsleft
  Scenario: Verify the items left count
    Given I open Todos Page
    When I fill the todo task details
      | my first to to task |
      | sdsdfef             |
    Then verify the items left count
