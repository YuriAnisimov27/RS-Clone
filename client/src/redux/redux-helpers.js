import { SET_LANG_TO_BY, SET_LANG_TO_ENG, SET_LANG_TO_RUS } from "./types";

export const mapStateToProps = (state) => {
  const { currentLanguage } = state;
  const {
    authNavPlaylist,
    authNavSettings,
    authNavRegistration,
    footerContent,
    developers,
    anisimov,
    kovbenya,
    martinkevich,
    chazov,
  } = state[currentLanguage];

  return {
    authNavPlaylist,
    authNavSettings,
    authNavRegistration,
    footerContent,
    developers,
    footerAnisimov: anisimov,
    footerKovbenya: kovbenya,
    footerMartinkevich: martinkevich,
    footerChazov: chazov,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setRu: () => dispatch({ type: SET_LANG_TO_RUS }),
  setEn: () => dispatch({ type: SET_LANG_TO_ENG }),
  setBel: () => dispatch({ type: SET_LANG_TO_BY }),
});
