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

//GET REQUEST TO THE SERVER
$.ajax({
  type:"GET",
  dataType: "json",
  url: "https://api.github.com/issues"
//RETURN TITLE FOR EACH ISSUE USING THE RENDER TEMPLATE ONCE THE GET REQUEST IS DONE
}).done(function(issues){
  _.each(issues,function(issue){
    renderTemplate('#open','#issues',issue);
  });
});


//   $.ajax({
//     type: "GET",
//     dataType: "json",
//     url: "https://api.github.com/issues"
//   }).done(function(issues) {
//   _.each(issues, function(issue) {
//     renderTemplate('#open', '#issues', issue);
//     $.ajax({
//       type: "GET",
//       dataType: "json",
//       url: issue.comments_url
//     }).done(function(comments) {
//       _.each(comments, function(comment) {
//         renderTemplate('#text', '#comments', comment);
//       });
//     });
//   });
// });
// setInterval($.ajax({
//   type: "GET",
//   dataType: "json",
//   url: "https://api.github.com/issues"
//   }).done(function(issues) {
//   _.each(issues, function(issue) {
//     renderTemplate('#open', '#issues', issue);
//     $.ajax({
//       type: "GET",
//       dataType: "json",
//       url: issue.comments_url
//     }).done(function(comments) {
//       _.each(comments, function(comment) {
//         renderTemplate('#text', '#comments', comment);
//       });
//     });
//   });
// }),10000);

// https://api.github.com/repos/TIY-GVL-FEE-2014-Aug/Assignments/issues/149/comments


// "https://api.github.com/repos/TIY-GVL-FEE-2014-Aug/Assignments/issues/149/comments"
