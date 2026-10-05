import styles from "./ListPanel.module.css";

export default function LeagueList({
  items = [],
  loading = false,
  error = null,
  disabled = false,
  onSelect,
  selectedId,
}) {
  return (
    <section className={styles.panel}>
      <h3>Ligor</h3>

      {disabled && <p style={{ opacity: 0.7 }}>Välj en sport.</p>}
      {!disabled && loading && <p>Laddar…</p>}
      {!disabled && error && (<p style={{ color: 'crimson' }}>Fel: {error.message}</p>)}
      {!disabled && !loading && !error && (
        <ul className={styles.list}>
          {items.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                className={`${styles.row} ${selectedId === l.id ? styles.active : ''}`}
                onClick={onSelect ? () => onSelect(l.id, l) : undefined}
              >
                <span className={styles.name}>{l.name}</span>
              </button>
            </li>
          ))}
          {!items.length && (
            <li>
              <em>Inga ligor.</em>
            </li>
          )}
        </ul>
      )}
    </section>
  );
}
