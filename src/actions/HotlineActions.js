import {
    SHOW_HOTLINES
} from './types';
import hotlines from '../data/hotlines';

export const showHotline= (location) => {
    return (dispatch) => {
        switch (location) {
            case 'Quezon City':
                dispatch ({
                    type: SHOW_HOTLINE,
                    payload: hotlines.quezon_city,
                });
                break;
	    default:
                dispatch ({
                    type: SHOW_HOTLINE,
                    payload: hotlines.metro_manila, 
                });
		break;
            
        }
    }
    
};
