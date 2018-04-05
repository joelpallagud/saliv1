import {
    BREATHING_CHOOSE,
    PULSE_CHOOSE,
    CONSCIOUS_CHOOSE,
    INFANT_CHOOSE,
    CHILD_CHOOSE,
    DROWNING_CHOOSE,
} from './types';
import { NavigationActions } from 'react-navigation';

const navigate = (route) => {
    dispatch(NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: route })
        ]}));
}

export const chooseInfant = (isInfant) => {
    dispatch({
        type: INFANT_CHOOSE,
        payload: isInfant
    });
    
    (isInfant) ? navigate('Infant'): navigate('Child')
};

export const chooseChild = (isChild) => {
    dispatch({
        type: CHILD_CHOOSE,
        payload: isChild
    });
    (isChild) ? navigate('Drown'): navigate('Child')
};

export const chooseDrowning = (isDrowning) => {
    dispatch({
        type: Drowning_CHOOSE,
        payload: isDrowning
    });
    dispatch(NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Home'})
        ]}));
};

export const chooseBreathing = (isBreathing) => {
    dispatch({
        type: BREATHING_CHOOSE,
        payload: isBreathing
    });
    dispatch(NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Home'})
        ]}));
};

export const chooseConscious = (isConscious) => {
    dispatch({
        type: CONSCIOUS_CHOOSE,
        payload: isConscious
    });
    dispatch(NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Home'})
        ]}));
};

export const choosePulse = (hasPulse) => {
    dispatch({
        type: PULSE_CHOOSE,
        payload: hasPulse
    });
    dispatch(NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Home'})
        ]}));
};
