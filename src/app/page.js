'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { EnhancedTestInputForm } from './forms/input'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{fontWeight: 'bold'}}>Learning Yup</div>
      <EnhancedTestInputForm></EnhancedTestInputForm>
    </main>
  )
}
