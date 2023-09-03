import { Experience } from "@/data";
import { FONT } from "@/constant";

export default function JobExp({ params }) {
  const circle = (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#343434" />
    </svg>
  );

  const id = params.id;
  const list = Experience.filter((item) => id.includes(item.id));
  return (
    <section className="experience-page">
      {list.map((item) => (
        <div key={item.id} className={`wrapper`}>
          <h1 className={FONT.Heading}>{item.title}</h1>
          <p className={FONT.montserratNorm}>{item.des1}</p>
          <p className={FONT.montserratNorm}>{item?.des2}</p>
          <ul>
            {item.list?.map((item) => (
              <li className={FONT.montserratNorm} key={item}>
                <span> {item}</span>
              </li>
            ))}
          </ul>
          <ul>
            {item.list?.map((item) => (
              <li className={FONT.montserratNorm} key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className={FONT.subHeading}>{item.jobDes.title}</h2>
          <p className={FONT.montserratNorm}>{item.jobDes.des}</p>
          <ul>
            {item.jobDes.list?.map((item) => (
              <li className={FONT.montserratNorm} key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
