// src/features/sports/pages/SportsPage.jsx
import { useState, useMemo } from 'react';
import { useLeagues, useTeams } from '../hooks';
import SportMenu from '../components/SportMenu.jsx';
import LeagueList from '../components/LeagueList.jsx';
import TeamList from '../components/TeamList.jsx';
import styles from './SportsPage.module.css';

export default function SportsPage() {
  // SportsPage håller reda på olika 'states', och de skall gå att ändra på via useState()
  // Här skapas 'selectedSportId' och dess ändringsfunktion.
  const [selectedSportId, setSelectedSportId] = useState(); // "football" | "icehockey" | "floorball"

  // SportsPage behöver också hålla reda på 'selectedLeagueId' som state
  // ???
  
  // Hämta en lista med ligor via hooks (useLeagues(sportId))
   const leagues = useLeagues(selectedSportId);

  // Hämta en lista med lag via hooks (useTeams(leagueId))
  // ???

  return (
    <>
      <header className={styles.topbar}>
        <h1>SportStats (React)</h1>
        <SportMenu
          selectedSportIdIn={selectedSportId}
          onChangeOut={(id) => {
            // 'onChangeOut' prop triggar pil-funktion som sätter sportId och nollar liga-id
            setSelectedSportId(id);
            setSelectedLeagueId(null);
          }}
        />
      </header>

      <main className={styles.layout}>
        <section className={styles.col}>
          <LeagueList
            // LeagueList har flera props ('loading' och 'error') som sköter om felhantering vid hämtning av data 
            // dessa följer med automatiskt från hämtningen via den färdiga hooks.jsx
            // det är 'items' och två till (som du måste skapa) som sköter själva funktionaliteten runt kommunikation.
            // 'disabled' är också bara en "säkerhetssignal" för att rendera sidan mer korrekt
            // items={dummyLeagues}
            items={leagues.data}
            loading={leagues.loading}
            error={leagues.err}
            // [SKAPA] Vald liga (id) måste skickas in som prop för att kunna markera "klickad liga".
            // [SKAPA] Liga-klick i LeagueList signaleras ut till SportsPage och ändrar 'selectedLeagueId'
            disabled={!selectedSportId}  // Om ingen sport har valts -> disabled = true
          />
        </section>

        <section className={styles.col}>
          <TeamList
          // TeamList har samma 4 props som LeagueList för själva datahämtningen och 'disabled' men behöver inte få ut
          // en triggning vid klickat lag och inte heller skicka in valt lag för "markering av klickat lag"

          />
        </section>
      </main>
    </>
  );
}
