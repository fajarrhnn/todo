import styles from "../styles/description.module.css";

export default function Description({ children }: { children: React.ReactNode }) {
  return <p className={`text-base lg:text-2xl ${styles.p}`}>{children}</p>;
}
