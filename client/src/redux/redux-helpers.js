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
  setRu: () => dispatch({ type: "CHANGE_LNG", lng: "ru" }),
  setEn: () => dispatch({ type: "CHANGE_LNG", lng: "en" }),
  setBel: () => dispatch({ type: "CHANGE_LNG", lng: "bel" }),
});
