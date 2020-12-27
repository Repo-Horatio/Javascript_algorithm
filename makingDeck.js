var makingDeck = function() {
    var suits = [ '♥', '♣', '♠', '♦' ];
    var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
    var deck = [];
  
    suits.forEach(function(suit) {
      values.forEach(function(value) {
        deck.push(value + suit);
      });
    });
  
    return deck;
  };