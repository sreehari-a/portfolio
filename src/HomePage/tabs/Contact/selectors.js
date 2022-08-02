/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectContacts = state => state.messageForm || initialState;

const selectLoader = () =>
  createSelector(
    selectContacts,
    contacts => contacts.loading,
  );

export { selectLoader, selectContacts };
