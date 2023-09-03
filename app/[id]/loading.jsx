import Image from "next/image";
import "../sass/styles.css";
import Load from "../components/load";

export default function Loading() {
  return (
    <section className="loading ">
      <div className="wrapper">
        <Load />
      </div>
    </section>
  );
}
