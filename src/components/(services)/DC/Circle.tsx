import React from 'react'
import styles from './circle.module.css'

export default function Circle() {
    let text = 'Watch our Agency Vedio '
    let arr = text.split('')
    
    return (
        <div className={styles.container}>
          {arr.map((char , i) =>{
            return <>
            <span key={char} className={`font-jakarta text-base font-medium ${styles.circle} ${`circle_${i+1}`}`}>{char}</span>
            </>
          })}
        </div>
      );
}
