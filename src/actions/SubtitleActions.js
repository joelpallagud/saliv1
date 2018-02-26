import {
    SHOW_SUBTITLES,
    CHOOSE_SUBTITLES
} from './types';
import subtitles from '../data/subs/subtitles';

export const showSubtitles= (page, language) => {
    return (dispatch) => {
	switch(language){
	    case 'English':
		switch (page) {
		    case 'Call':
			dispatch ({
			    type: SHOW_SUBTITLES,
			    payload: subtitles.english.call,
			});
			break;
		    case 'Survey':
			dispatch ({
			    type: SHOW_SUBTITLES,
			    payload: subtitles.english.survey,
			});
			break;
		    default:
			dispatch ({
			    type: SHOW_SUBTITLES,
			    payload: subtitles.english, 
			});
			break;
		    break;
		    }
	    case 'Tagalog':
		switch(page){
			default: 
			    dispatch ({
				type: SHOW_SUBTITLES,
				payload: subtitles.english, 
			    });
			break;
		    }
		break;
		
	}
    }
    
};

export const chooseSubtitles = (page, language) => {
    return {
	type: CHOOSE_SUBTITLES,
	payload: page, language,
    }
}
