import Image from "next/image";
import gg from "../../assets/images/gg.gif";
import "../sass/styles.css";

export default function Load() {
  return (
    <section className="snail">
      <Image src={gg} alt="snail loading-screen" width={"100%"} />
    </section>
  );
}
