import styles from "../styles/title.module.css";

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return <h1 className={`text-xl lg:text-3xl ${styles.h2}`}>{children}</h1>;
}
