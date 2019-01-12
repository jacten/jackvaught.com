import React from 'react';
import s from './fact.module.css'

const FactItem = ({category, index, fact}) => {
  return (
    <div className={`${index % 2 ? s.light : s.dark} ${s.fact}`}>
     {category}: {fact}
    </div>
  )
};

export default FactItem;