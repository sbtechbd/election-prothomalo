var lazyload=lazyload{};(function($,lazyload){use strict;var page=2,buttonId=#button-more,loadingId=#loading-div,container=#more-news;lazyload.load=function(){load_data();};var appendContests=function(response){var id=$(buttonId);$(buttonId).show();$(loadingId).hide();$(response).appendTo($(container));page+=1;};function load_data()
{var url=$('#load_more_news').val();var changeValue='15';var start=$('#start').val();var district_tag=$('#hidden_district_tag').val();$(buttonId).hide();$(loadingId).show();$.ajax({urlurl,data{startstart,district_tagdistrict_tag},successfunction(response){if(response.length10){$('#button-more').hide();$('#loading-div').hide();return;}
var calculateStart=Number(start)+15;var htmlString=$().html();$('#start').val(calculateStart);appendContests(response);},errorfunction(response){$(loadingId).text(Sorry, there was some error with the request. Please refresh the page.);}});}})(jQuery,lazyload);