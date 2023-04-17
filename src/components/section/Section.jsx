import styles from './Section.module.css'

export const Section = ({ title, children }) => {
  return (
      <section className={title ? styles.superSection : styles.section}>
          {title && <h2>{title}</h2>}
        {children}
    </section>
  )
}
