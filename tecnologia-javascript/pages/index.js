import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Restaurante fictício para site de teste</p>
      <p className={styles.text}>Não atuamos no ramo alimentício, mas aproveite o site mesmo assim ;)</p>
      <br/>
    </div>
  )
}
