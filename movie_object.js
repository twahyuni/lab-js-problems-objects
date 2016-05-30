//Object Constructors and Methods
var Movie = function (info) {
  this.title = info.title;
  this.timeOfPlay = info.timeOfPlay;
  this.maxCapacity = info.maxCapacity;
  this.seatsLeft = info.maxCapacity;
  this.seats = info.seats;
  this.price = info.price;
  this.ticketSold =  {
    adult: 0,
    child: 0
  }

  this.getRevenue = function() {
    return (this.price.adult * this.ticketSold.adult) + (this.price.child * this.ticketSold.child);
  }

  this.Ticket = function(seat, seatType, price, timeOfPlay) {
    this.seat = seat;
    this.seatType = seatType;
    this.price = price;
    this.timeOfPlay = timeOfPlay;
    this.used = false;
    this.useTicket = function() {
      if (this.used) {
        console.log ("This ticket is already used");
      } else {
        this.used = true;
        console.log ("Welcome");
      }
    }
  }

  this.generateTicket = function(seatCord, seatType) {
    if(this.seats[seatCord[0]][seatCord[1]] =='o' && this.seatsLeft > 0) {
      this.seats[seatCord[0]][seatCord[1]] = 'x';
      this.seatsLeft--;
      this.ticketSold[seatType]++;
      console.log("Ticket confirmation: " + seatType + " , " + seatCord + " for " + this.title + " at " + this.timeOfPlay);
      return new this.Ticket(seatCord, seatType, this.price[seatType], this.timeOfPlay);
    } else {
      console.log("seat is taken!");
    }
  }
};

//Object Instances
var civilWarInfo = {
  title: "Captain America: Civil War",
  timeOfPlay: 1600,
  maxCapacity: 20,
  seats: [
    ['o','o','o','o','o'],
    ['o','o','o','o','o'],
    ['o','o','o','o','o'],
    ['o','o','o','o','o']
  ],
  price: {
    adult: 100,
    child: 80
  }
};

var civilWar = new Movie(civilWarInfo);

//CallBack
var ticketA = civilWar.generateTicket([0,2],"adult");
civilWar.getRevenue();
var ticketB = civilWar.generateTicket([2,2],"adult");
civilWar.getRevenue();
ticketA.useTicket();
ticketA.useTicket();