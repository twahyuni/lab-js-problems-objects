## Introduction

You are to create a ticketing machine for a cinema, more specifically just 1 movie.

To start, create an **object contructor** for a specific movie called `var Movie`.

The object contructor should have these properties (how do we pass these information to the contructor?):

  1. title (string)
  2. timeOfPlay (number ex: 1600)
  3. seats (array of an array)
  4. maxCapacity (number)
  5. price (object)
    a. adult (number)
    b. child (number)
  6. ticketSold (object)
    a. adult (number)
    b. child (number)
  7. getRevenue (function)
  8. Ticket (object contructor for ticket)
  9. generateTicket (function)

## More Instructions

1. The following is an example of the seating plans `seats`. It is an array of an array. `'x' = taken` and `'o' = empty`.

  ```js
  movie = {
    seats: [
      ['o','o','o','o','o'],
      ['o','o','o','o','o'],
      ['o','o','o','o','o'],
      ['o','o','o','o','o']
    ]
  }
  ```

2. The `price` & `ticketSold` is an object with two key value pair.

  ```js
  movie = {
    price: {
      adult: 100,
      child: 80
    },
    ticketSold: {
      adult: 0,
      child: 0
    }
  }
  ```

3. `getRevenue` is a function that takes the **product** of `price` and `ticketSold` and **return the total revenue**.

4. `Ticket` is an object constructor for a new ticket. This contructor has the following properties:
  1. seat (coordinate in form of an array of number)
  2. seatType ('adult' or 'child')
  3. price (number)
  4. timeOfPlay (number ex: 1600)

5. `generateTicket` is a function that takes in what the customer wants. EX: I am a adult, i want a seat on [0, 2] that is the middle seat at the top row. What this function should do is take this input, check the seats to make sure the seat is not already taken, take record of ticket being sold, and generate & return the ticket.

## Starter Code

There is no starter code for this. Just **fork** and **clone** this repo.