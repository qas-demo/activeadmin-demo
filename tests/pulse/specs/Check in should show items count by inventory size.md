# Check in should show items count by inventory size
Feature: Check in
  As a user
  When I purchase an item
  It should reduce the inventory count

Precondition: Login Successful

## Check in should show items count by inventory size
* Purchase an item
* 