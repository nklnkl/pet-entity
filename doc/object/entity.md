# Entity
The base class that all application objects inherit from.

## Properties
- id
  - type: string
  - description: unique identifier of instance if saved to database,
  can be referenced.
- created
  - type: number
  - description: date of when instance was created since epoch, measured
  in milliseconds since epoch
- updated
  - type: number
  - description: date of when instance was last updated since epoch, measured
  in milliseconds since epoch
