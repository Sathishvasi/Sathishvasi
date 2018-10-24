$(document).ready(function () {

  $.ajax({
    url: 'https://aravindtwitter.herokuapp.com/twittersearch?key=adobe',
    dataType: 'json',
    success: function (data) {

      console.log(data);
      var card_html = "";
      $.each(data.statuses, function (index, value) {
        card_html += '<div class="card"><div class="col-md-2 col-sm-2 col-xs-3 img-alignment"><img src="' + value.user.profile_image_url + '" class="img-responsive center-block"></div><div class="col-md-10 col-sm-10 col-xs-9"><div class="col-md-4 col-sm-4 col-xs-4 break-res" data-toggle="tooltip" data-placement="center" title="' + value.user.name + '">' + value.user.name + '</div><div class="col-md-4 col-sm-4 col-xs-4 break-res" data-toggle="tooltip" data-placement="center" title="' + value.user.screen_name + '">' + value.user.screen_name + '</div><div data-toggle="tooltip" data-placement="center" title="' + value.created_at + '" class="col-md-4 col-sm-4 col-xs-4 break-res">' + value.created_at + '</div><div class="top col-md-12 col-xs-12 col-sm-12"><b>' + value.user.description + '</b></div></div></div>';
      });
      $(".total-cards").append(card_html);
    }
  });

})