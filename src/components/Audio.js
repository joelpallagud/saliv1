import React, { Component } from 'react';
import { default as Sound } from 'react-native-sound';

Sound.setCategory("Playback");

var s = new Sound('survey.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
	console.log("Failed to load audio", error);
	return;
    }
});

s.play((success) => {
    if (!success) {
	console.log("Playback failed due to audio decoding errors");
    }
});

s.setNumberOfLoops(-1);
