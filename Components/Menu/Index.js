import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link'
import Account from '../Account/index'
import Search from '../search/index'
export default function BasicCard() {
  return (
    <>
    <ul className="menu-bar noselect">
    <Link href="/">
    <li><HomeIcon /> </li>
    </Link>
    <li>افلام</li>
    <li>مسلسلات</li>
    <li>انمي</li>
    <li>اطفال</li>
    <li className='Library'>المكتبه</li>
    <div className="menuLeft"> 

    <Account/>
    <Search/>
    </div>
   </ul> 
    </>
  );
}
