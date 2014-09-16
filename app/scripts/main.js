var token = "416f9df508df99beb545129aedec40db4361bea5";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

function renderTemplate(templateId, location, model) {
  var templateString = $(templateId).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(model);
  $(location).append(renderedTemplate);
}

$.ajax({
  type: "GET",
  dataType: "json",
  url: "https://api.github.com/issues"
}).done(function(items) {
  _.each(items, function(item) {
  renderTemplate('#open', '#issues', item);
  });
});



// "https://api.github.com/repos/TIY-GVL-FEE-2014-Aug/Assignments/issues/149/comments"
