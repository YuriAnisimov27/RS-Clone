export const mapStateToProps = (state) => {
  const currentLanguage = state.currentLanguage;

  return {
    authNavPlaylist: state[currentLanguage].authNavPlaylist,
    authNavSettings: state[currentLanguage].authNavSettings,
    authNavRegistration: state[currentLanguage].authNavRegistration,

    footerContent: state[currentLanguage].footerContent,
    developers: state[currentLanguage].developers,
    footerAnisimov: state[currentLanguage].anisimov,
    footerKovbenya: state[currentLanguage].kovbenya,
    footerMartinkevich: state[currentLanguage].martinkevich,
    footerChazov: state[currentLanguage].chazov,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setRu: () => dispatch({ type: 'CHANGE_LNG', lng: 'ru' }),
    setEn: () => dispatch({ type: 'CHANGE_LNG', lng: 'en' }),
    setBel: () => dispatch({ type: 'CHANGE_LNG', lng: 'bel' }),
  }
}