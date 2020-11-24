
export const goToHome = (history) => {
  history.push("/");
};

export const goToDetails = (history) => {
  history.push("/detalhes");
};

export const goToPokedex = (history) => {
  history.push("/pokedex");
};

export const goBack = (history) => {
    history.goBack();
  };


