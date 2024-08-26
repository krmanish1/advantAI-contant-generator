/* eslint-disable no-unused-vars */
import SearchSection from '@/components/SearchSection'
import TemplateListSection from '@/components/TemplateListSection'
import React, { useState } from 'react'

function Home() {

    const [userSearchInput, setUserSearchInput] = useState()
    return (
        <div className='w-full bg-gray-100'>
            <SearchSection onSearchInput={(value) => setUserSearchInput(value)} />
            <TemplateListSection userSearchInput={userSearchInput} />
        </div>
    )
}

export default Home
