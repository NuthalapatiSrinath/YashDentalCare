import React from "react";
import { UserCheck, Settings, ShieldCheck, Smile } from "lucide-react";
import styles from "./StatsSection.module.css";

const stats = [
  {
    id: 1,
    number: "1250+",
    label: "Satisfied Patient",
    icon: <UserCheck strokeWidth={1.3} className={styles.icon} />,
  },
  {
    id: 2,
    number: "13+",
    label: "Years Of Experience",
    icon: <Settings strokeWidth={1.3} className={styles.icon} />,
  },
  {
    id: 3,
    number: "99%",
    label: "Dental Problems Solved",
    icon: <ShieldCheck strokeWidth={1.3} className={styles.icon} />,
  },
  {
    id: 4,
    number: "1250+",
    label: "Smile Designing's",
    icon: <Smile strokeWidth={1.3} className={styles.icon} />,
  },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Card Container Wrapper */}
        <div className={styles.statsCard}>
          <div className={styles.grid}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.statItem}>
                <div className={styles.iconWrapper}>{stat.icon}</div>
                <h3 className={styles.number}>{stat.number}</h3>
                <p className={styles.label}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
