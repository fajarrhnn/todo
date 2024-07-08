import styles from "../styles/title.module.css";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className={`text-3xl lg:text-5xl ${styles.h1}`}>{children}</h1>;
}
