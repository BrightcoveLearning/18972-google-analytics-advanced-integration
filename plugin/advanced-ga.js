videojs.registerPlugin('advancedGA', function() {
    var myPlayer = this;
    myPlayer.bcGa({
      "paramsToTrack": {
      "bcvideo_video_seconds_viewed": "dimension7",
      "bcvideo_range": "dimension8",
      "bcvideo_video_duration": "dimension9",
      "bcvideo_player": "dimension10",
      "bcvideo_account": "dimension11",
      "bcvideo_session": "dimension12",
      "bcvideo_platform_version": "dimension13"
      },
      "eventsToTrack": {
        "video_impression": "Video Impression",
        "play_request": "Play Request",
        "video_engagement": "Video Engagement",
        "ad_start": "Ad Start",
        "ad_end": "Ad End",
        "player_load": "Player Load",
        "error": "Error"
      },
      "tracker": "UA-150904906-1"
    });
    /*
      Two extra events can be added:
      - video_view
      - video_complete
    */
});
