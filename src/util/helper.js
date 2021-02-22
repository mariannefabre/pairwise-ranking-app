import {useSelector} from 'react-redux';

export const useOption = (id) => {
  const options = useSelector(state => state.options);
  return options.find(option => option.id === id); 
};

