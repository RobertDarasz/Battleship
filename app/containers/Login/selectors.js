import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectAuthStatus = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('status')
);

const makeSelectFirstName = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('name')
);
export {
  selectGlobal,
  makeSelectAuthStatus,
  makeSelectFirstName
};
