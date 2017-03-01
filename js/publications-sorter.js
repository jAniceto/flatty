// Publication type counters
var pubList = $('.pub');
var nArticles = 0;
var nChapters = 0;
var nComminications = 0;

for (var i = 0; i <= pubList.length; i++) {
  var tag = $(pubList[i]).find('.pub-tag').html();

  if (tag == 'Journal Article') {
    nArticles++;
  } else if (tag == 'Book Chapter') {
    nChapters++;
  } else if (tag == 'Communication') {
    nComminications++;
  };
};

// Populate counters in the Publications section
$('#counter-articles').html('' + nArticles);
$('#counter-chapters').html('' + nChapters);
$('#counter-communications').html('' + nComminications);

// Populate counters in the About me section
$('#counter-articles-').html('' + nArticles);
$('#counter-chapters-').html('' + nChapters);
$('#counter-communications-').html('' + nComminications);


// Toggles for publication type
$('.pub-toogle').click(function() {
  $(this).toggleClass('toggle-on')
  var wtoggle = $(this).html().slice(0,-1);

  // var pubList = $('.pub');

  for (var i = 0; i <= pubList.length; i++) {
    var tag = $(pubList[i]).find('.pub-tag').html();

    if (tag == wtoggle) {
      $(pubList[i]).toggle('slow');
    };
  }
});
