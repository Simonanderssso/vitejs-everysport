// src/features/sports/components/SportMenu.jsx
import styles from "./SportMenu.module.css";

const SPORTS = [
  { key: "football",  label: "Fotboll", id: 10   },
  { key: "icehockey", label: "Ishockey", id: 2  },
  { key: "floorball", label: "Innebandy", id: 4 },
];

/**
 * Props:
 * - selectedSportIdIn: "10" | "2" | "4" | undefined  (football, icehockey, floorball)
 * - onChange: (sportKey) => void
 */
export default function SportMenu(
  { selectedSportIdIn, onChangeOut } 
  ) {
  return (
    <nav className={styles.sportMenu} aria-label="Sportmeny">
      {SPORTS.map((sport) => {
        const active = sport.id === selectedSportIdIn;
        return (
          <button
            key={sport.key}
            type="button"
            className={`${styles.button} ${active ? styles.active : ""}`}
            aria-pressed={active}
            onClick={() => onChangeOut?.(sport.id)}
          >
            {sport.label}
          </button>
        );
      })}
    </nav>
  );
}
