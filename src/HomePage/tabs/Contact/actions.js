/*
 * ContentList -  Actions
 */

import ActionTypes from './constants';

/**
 * load the contents of the page
 *
 * @param  {object} payload object containing get params
 *
 * @return {object} An action object with a type of LOAD_CONTENT
 */
export function sendMessage(payload) {
  return {
    type: ActionTypes.SEND_MESSAGE,
    payload,
  };
}
/**
 * sets the contents of the page to redux state
 *
 * @param  {object} payload content data array with its metadata
 *
 * @return {object} An action object with a type of SET_CONTENTS
 */
export function setLoader(payload) {
  return {
    type: ActionTypes.SET_LOADER,
    payload,
  };
}
