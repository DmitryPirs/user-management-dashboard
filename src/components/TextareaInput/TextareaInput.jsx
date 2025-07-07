import styles from './TextareaInput.module.css'

export default function TextareaInput({ labelText, ...props }) {
  const { name, id, placeholder, value, rows = 4 } = props
  return (
    <div>
      {labelText && (
        <label className={styles.label} htmlFor={id}>
          {labelText}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        rows={rows}
        // onChange={handleChange}
        className={styles.input}
      />
    </div>
  )
}
