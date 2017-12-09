# Session
- inherited
  - entity (doc/object/entity.md)
- properties
  - userId
    - description: reference to account that owns the session
    - type: string

## constructor
- description: will pass valid object properties to
inherited super class entity (doc/object/entity.md)
- parameters
  - object
    - type: object
    - presence: required
    - validation: none
    - properties
      - userId
        - type: string
        - presence: required
        - validation: none

## toObject()
- description: Create a generic object from instance
- parameters
  - none
- returns
  - object
    - type: object
    - properties of instance
    - properties of inherited class

## setUserId()
- description: Set the user id of instance
- parameters
  - userId
    - type: string
    - presence: required
    - validation: none
- returns
  - none

## getUserId()
  - description: Returns the user id of instance
  - parameters
    - none
  - returns
    - userId
      - type: string
