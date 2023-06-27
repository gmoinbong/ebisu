import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const useHeaderSelector = () => {
  const country = useSelector((state: RootState) => state.setCountry.country);

  return { country };
};

export default useHeaderSelector;
