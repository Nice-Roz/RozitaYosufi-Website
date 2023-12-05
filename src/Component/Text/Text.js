import React from 'react'
import './text.css';
import {useTranslation} from 'react-i18next';
function Text({text}) {
  const {t} = useTranslation();
  return (
    <div className='text-wrapper'>
       <h1>{t(text)}</h1>
    </div>
  )
}

export default Text