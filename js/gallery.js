$(document).ready(function(){
    var wookmark1 = new Wookmark('#wookmark1', {
        outerOffset: 10, // Optional, the distance to the containers border
        itemWidth: 210 // Optional, the width of a grid item
    });
    $('.gallery a[href^="#"]').colorbox({ inline: true, maxWidth: "85%", maxHeight: "85%", current: false, opacity: .8, /*width: window.innerWidth, height: window.innerHeight*/ });
    $('video').mediaelementplayer({
        //mode: 'shim',
        videoWidth: .8*window.innerWidth,
        videoHeight: 9/16*.8*window.innerWidth,
        // setDimensions: false,
        stretching: 'none',
        // videoVolume: 'horizontal',
        success: function(player, node) {
            $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
        }
    });
});