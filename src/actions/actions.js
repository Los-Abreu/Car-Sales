export const Add_Features = (item) => {
    return { type: 'ADD_FEATURES', payload:item };
  };

export const Remove_Features = (item) => {
  return { type: 'REMOVE_FEATURES', payload:item}
}