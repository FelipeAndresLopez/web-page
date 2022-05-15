import { useState } from 'react';

const initialState = {
  mobileMenu: false
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const displayMobileMenu = () => {
    setState({
      ...state,
      mobileMenu: !state.mobileMenu
    });
  };

  return {
    displayMobileMenu,
    state
  };
};

export default useInitialState;
