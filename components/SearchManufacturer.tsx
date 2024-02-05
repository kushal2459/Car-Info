'use client';
import React from 'react';
import Image from 'next/image';

import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = 
    query === "" ? manufacturers 
      : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")
    ))

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image src='/car-logo.svg' width={20} height={20} className='ml-4' alt='Volkswagen Logo'></Image>
          </Combobox.Button>

          <Combobox.Input className='search-manufacturer__input' placeholder='Volkswagen...' displayValue={(manufacturers : string) => manufacturers} onChange={(e) => setQuery(e.target.value)} />

          <Transition 
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}>
              <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm' static>
                {filteredManufacturers.length === 0 && query !== '' ? (
                  <Combobox.Option value={query} className='search-manufacturer__option'>
                    Create "{query}"
                  </Combobox.Option>
                ): (
                  filteredManufacturers.map((item) => (
                    <Combobox.Options
                      key= {item}
                      value= {item}
                      className={({ active }) => `relative search-manufacturer__option 
                      ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} 
                      >
                        {item}
                    </Combobox.Options>
                  ))
                )}
              </Combobox.Options>
            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer