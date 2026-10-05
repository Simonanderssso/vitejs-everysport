import styles from "./ListPanel.module.css";

export default function TeamList({
  // Här behöver du komplettera med flera olika props
  // Dock behövs inte sådant som har med klickning och markering av valt lag finnas.
  // Det räcker med 4 st props.
  items = [], 
  loading = false,    // pågående hämtning
  error = null,       // fel vid hämtning
  disabled = false,   //ingen vald liga
  
}) {
  return (
    <section className={styles.panel}>
      <h3>Lag</h3>
     {/*
      Detta är en block-kommentar i JSX.
      Här skall du komplettera med kod som listar alla lag.
      Beroende på värdet av inskickade props så kan man alternativ visa
      texter som "Ingen liga vald" och "Loading.." eller "Error"
      Men om allt är ok så lista alla lag.
      Tänk på att om Ligor laddats om (pga byta av sport) så behöver Lag listningen döljas.
      Detta görs lämpligen med 'disabled' prop.
      Kolla i LeagueList för inspiration.
     */}
      {disabled && <p style={{ opacity: 0.7 }}>Välj en liga.</p>}
      {!disabled && loading && <p>Laddar…</p>}
      {!disabled && error && (<p style={{ color: 'crimson' }}>Fel: {error.message}</p>)}
      {!disabled && !loading && !error && (
          <ul className={styles.list}>
            {/*Ett li per lag och key får react hålla isär rader */}
            {items.map((t) => (
              <li key={t.id} className={styles.item}>
                <span className={styles.name}>{t.name}</span>
              </li>
            ))}
            {!items.length && (
            <li>
              <em>Inga lag.</em>
            </li>
            )}
          </ul>
        )}

    </section>
  );
}
