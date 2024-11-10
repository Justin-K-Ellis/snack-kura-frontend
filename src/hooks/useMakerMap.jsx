import useMakers from "../hooks/useMakers";

function useMakerMap() {
  const makers = useMakers();
  let makerMap = {};

  try {
    if (makers) {
      for (let maker of makers) {
        makerMap[maker.name] = maker.id;
      }
    }
    return makerMap;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default useMakerMap;
