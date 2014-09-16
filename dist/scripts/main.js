var token = "416f9df508df99beb545129aedec40db4361bea5";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

console.log('The Iron Yard Rocks');
