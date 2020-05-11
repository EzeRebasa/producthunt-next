import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <Link href="/"> Inic </Link>
            <Link href="/"> Popular </Link>
            <Link href="/"> New Product </Link>
        </nav>
      );
}
 
export default Navigation;