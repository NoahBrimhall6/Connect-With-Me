import React from 'react';
import Item from './Item';
import { RESOURCES, SUPPORT, COMPANY } from './Menus';

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-16 px-5 pb-8 pt-2'>
      <Item Links={COMPANY} title='COMPANY' />
      <Item Links={RESOURCES} title='RESOURCES' />
      <Item Links={SUPPORT} title='SUPPORT' />
    </div>
  )
}

export default ItemsContainer;