import {
    SHOW_HOTLINES
} from './types';
import hotlines from '../data/hotlines';

export const showHotlines= (location) => {
    return (dispatch) => {
        switch (location) {
            case 'Quezon City':
                dispatch ({
                    type: SHOW_HOTLINES,
                    payload: hotlines.quezon_city,
                });
                break;
	    default:
                dispatch ({
                    type: SHOW_HOTLINES,
                    payload: hotlines.metro_manila, 
                });
		break;
            
        }
    }
    
};
