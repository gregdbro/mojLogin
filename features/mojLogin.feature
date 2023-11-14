Feature: Automation testing of the MoJ website login

  Background: Navigate to the MoJ login page
    Given I navigate to the MoJ login page

#Positive test cases
  Scenario: Validate user can successfully login to the site
    When I input the username "mojTechnicalTest20231114@outlook.com"
    And I input the password "ibnk237SEAHR!"
    And I click the Login button
    Then I expect to be logged in and receive the text "Pre-employment checks" to be visible

#Negative test cases
  Scenario Outline: Validate that errors are present when the user inserts incorrect details
    When I input the username "<username>"
    And I input the password "<password>"
    And I click the Login button
    Then I expect to receive the error message "<errorMessage>"

    Examples:
      |username |password     |errorMessage                 |
      |testUser |testPassword |Login Failed                 |

  Scenario Outline: Validate that errors are present when the user does not insert all the necessary parameters
    When I input the username "<username>"
    And I input the password "<password>"
    And I click the Login button
    Then I expect not to be logged in

    Examples:
      |username |password     |
      |         |             |
      |testUser |             |
      |         |testPassword |
