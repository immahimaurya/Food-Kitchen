/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 15:37:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrolltoTop = () => {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
        window.scroll({
            behavior : 'smooth'
        })
    },[pathname])

  return null;
}

export default ScrolltoTop