import {
    SHOW_SUBTITLES,
    CHOOSE_SUBTITLES
} from './types';
import subtitles from '../data/subs/subtitles';

export const showSubtitles= (page, language) => {
    return (dispatch) => {
	switch(language){
	    case "english":
		switch (page) {
		    case 'Call':
			
			dispatch ({
			    type: SHOW_SUBTITLES,
			    payload: subtitles.english.call,
			});
			break;
		    default:
			dispatch ({
			    type: SHOW_HOTLINES,
			    payload: subtitles.english, 
			});
			break;
		    break;
	    case "filipino":
		break;
		
	    }
	}
    }
    
};

export const chooseSubtitles = (page, language) => {
    return {
	type: CHOOSE_SUBTITLES,
	payload: page, language,
    }
}
