$(document).ready(function(){
  //initial state
  $('#homepage').show();
  $('#account').hide();
  $('#bio').hide();
  $('#store').hide();
  $('#checkout').hide();
  $('#signnav').css('background-color', '#F3D362');
  $('#lognav').css('background-color', '#F3D362');
  $('#bionav').css('background-color', '#F3D362');
  $('#shopnav').css('background-color', '#D95252');
  $('#signnav').css('cursor', 'pointer');
  $('#lognav').css('cursor', 'pointer');
  $('#bionav').css('cursor', 'pointer');
  $('#shopnav').css('cursor', 'pointer');
  $('article:first').css('cursor', 'pointer');


  //navigation
  $('#homenav').click(function(){
    $('#homepage').show();
    $('#account').hide();
    $('#bio').hide();
    $('#store').hide();
    $('#checkout').hide();
    $('#signnav').css('background-color', '#F3D362');
    $('#lognav').css('background-color', '#F3D362');
    $('#bionav').css('background-color', '#F3D362');
    $('#shopnav').css('background-color', '#D95252');
    $('#signnav').css('cursor', 'pointer');
    $('#lognav').css('cursor', 'pointer');
    $('#bionav').css('cursor', 'pointer');
    $('#shopnav').css('cursor', 'pointer');
  });
  $('#signnav').click(function(){
    $('#homepage').hide();
    $('#account').show();
    $('#bio').hide();
    $('#store').hide();
    $('#checkout').hide();
    $('#signnav').css('background-color', '#FAA669');
    $('#lognav').css('background-color', '#F3D362');
    $('#bionav').css('background-color', '#F3D362');
    $('#shopnav').css('background-color', '#D95252');
    $('#signnav').css('cursor', 'default');
    $('#lognav').css('cursor', 'pointer');
    $('#bionav').css('cursor', 'pointer');
    $('#shopnav').css('cursor', 'pointer');
  });
  $('#lognav').click(function(){
    $('#homepage').hide();
    $('#account').show();
    $('#bio').hide();
    $('#store').hide();
    $('#checkout').hide();
    $('#signnav').css('background-color', '#F3D362');
    $('#lognav').css('background-color', '#FAA669');
    $('#bionav').css('background-color', '#F3D362');
    $('#shopnav').css('background-color', '#D95252');
    $('#signnav').css('cursor', 'pointer');
    $('#lognav').css('cursor', 'default');
    $('#bionav').css('cursor', 'pointer');
    $('#shopnav').css('cursor', 'pointer');
  });
  $('#bionav').click(function(){
    $('#homepage').hide();
    $('#account').hide();
    $('#bio').show();
    $('#store').hide();
    $('#checkout').hide();
    $('#signnav').css('background-color', '#F3D362');
    $('#lognav').css('background-color', '#F3D362');
    $('#bionav').css('background-color', '#FAA669');
    $('#shopnav').css('background-color', '#D95252');
    $('#signnav').css('cursor', 'pointer');
    $('#lognav').css('cursor', 'pointer');
    $('#bionav').css('cursor', 'default');
    $('#shopnav').css('cursor', 'pointer');
  });
  $('#shopnav').click(function(){
    $('#homepage').hide();
    $('#account').hide();
    $('#bio').hide();
    $('#store').show();
    $('#checkout').hide();
    $('#signnav').css('background-color', '#F3D362');
    $('#lognav').css('background-color', '#F3D362');
    $('#bionav').css('background-color', '#F3D362');
    $('#shopnav').css('background-color', '#FAA669');
    $('#signnav').css('cursor', 'pointer');
    $('#lognav').css('cursor', 'pointer');
    $('#bionav').css('cursor', 'pointer');
    $('#shopnav').css('cursor', 'default');
  });
  $('#checkoutnav').click(function(){
    $('#homepage').hide();
    $('#account').hide();
    $('#bio').hide();
    $('#store').hide();
    $('#checkout').show();
  });

  //show the user that the first article is a link
  $('article:first').hover(function(){
    $(this).css('box-shadow', '0px 10px 5px #888');
  },
  function(){
    $(this).css('box-shadow', '0px 5px 5px #B0A686');
  });

});
