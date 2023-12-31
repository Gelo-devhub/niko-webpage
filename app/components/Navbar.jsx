import "../sass/styles.css";
import { Roboto, Poppins } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const share = (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 11.742C11.867 11.742 11.296 11.988 10.863 12.384L4.925 8.921C4.971 8.733 5 8.537 5 8.337C5 8.137 4.971 7.942 4.925 7.754L10.8 4.325C11.26 4.75838 11.868 4.99982 12.5 5C13.879 5 15 3.879 15 2.5C15 1.121 13.879 0 12.5 0C11.121 0 10 1.121 10 2.5C10 2.7 10.029 2.896 10.075 3.083L4.2 6.512C3.73976 6.07905 3.13188 5.83768 2.5 5.837C1.121 5.837 0 6.958 0 8.337C0 9.716 1.121 10.837 2.5 10.837C3.13197 10.8368 3.74004 10.5954 4.2 10.162L10.138 13.625C10.0943 13.8037 10.0718 13.987 10.071 14.171C10.0712 14.6511 10.2137 15.1204 10.4806 15.5195C10.7475 15.9187 11.1267 16.2297 11.5703 16.4134C12.0139 16.597 12.502 16.645 12.9729 16.5513C13.4438 16.4576 13.8764 16.2264 14.2159 15.8869C14.5554 15.5474 14.7866 15.1148 14.8803 14.6439C14.974 14.173 14.926 13.6849 14.7424 13.2413C14.5587 12.7977 14.2477 12.4185 13.8485 12.1516C13.4494 11.8847 12.9801 11.7422 12.5 11.742Z"
        fill="black"
      />
    </svg>
  );

  return (
    <nav>
      <Link href="/" className={`logo ${roboto.className}`}>
        {share} Niko <span>Santiago</span>
      </Link>
      <ul>
        <Link className={poppins.className} href="/">
          Home
        </Link>
        <Link
          className={`hover-btn contact ${poppins.className}`}
          href="/Contact"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
