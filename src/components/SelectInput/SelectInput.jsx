import styles from './SelectInput.module.css'

export default function SelectInput({ labelText, ...props }) {
  const { options, id, name } = props
  return (
    <div>
      {labelText && (
        <label className={styles.label} htmlFor={id}>
          {labelText}
        </label>
      )}

      <select id={id} name={name}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
