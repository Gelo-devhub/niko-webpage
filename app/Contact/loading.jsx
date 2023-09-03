import Image from "next/image";
import gg from "../../assets/images/gg.gif";
import "../sass/styles.css";

export default function Loading() {
  return (
    <section className="contact-load">
      <Image src={gg} width={"100%"} />
    </section>
  );
}
