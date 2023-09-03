import "../sass/styles.css";
import Load from "../components/Load";

export default function Loading() {
  return (
    <section className="loading ">
      <div className="wrapper">
        <Load />
      </div>
    </section>
  );
}
