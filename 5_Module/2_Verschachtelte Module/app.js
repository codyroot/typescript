﻿var models = video2brain.Models;
var business = video2brain.Business;

var video = new models.Video();
video.title = 'Haudrauff 2.0 - Die umfassende Schlägerei';

var trainer = new models.Trainer();
trainer.firstName = "Bud";
trainer.lastName = "Spencer";

video.duration = 11;
video.trainer = trainer;

var player = new business.VideoPlayer();

player.play(video);
