import React from 'react';
import './footerText.css';
import {useTranslation} from 'react-i18next';
function FooterText({text}) {
  const {t} = useTranslation();
  return (
    <div className='footer-text-wrapper'>
       {t(text)}
    </div>
  )
}

export default FooterText;