/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 15:34:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { LOCATION_API } from '../utils/constants';

const useSearchLocation = async (searchQuery, setSearchData) => {
  try {
    if (searchQuery !== '' && searchQuery?.length > 2) {
      const res = await fetch(LOCATION_API + searchQuery);
      if (!res.ok) {
        const error = res.status;
        throw new Error(error);
      } else {
        const json = await res.json();
        setSearchData(json?.data);
      }
    } else if (searchQuery === '') {
      setSearchData([]);
    }
  } catch (err) {
    console.log(err);
  }
};

export default useSearchLocation;