import Image from "next/image";
import check from "../../assets/images/check.jpg";

export default function Skills() {
  const list1 = [
    "Email Marketing tools/SMS",
    "HubSpot",
    "Klaviyo",
    "Sendinblue",
    "Benchmark Email",
    "Mailchimp",
    "Mailerlite",
    "Zendesk",
    " Spring Metrics",
    "Kissmetrics",
    "UX / UI",
  ];
  const list2 = [
    "SEO/SEM tools",
    "SEMRush: Marketing SEO",
    "KWFinder: SEO Keyword",
    "Moz Pro: SEO Software",
    "Google Ads",
    "SpyFu: Free SEO Tool",
    "Web Developer tools",
    " Google Analytics.",
    "GMB",
    "GTM",
    "Email integrations",
  ];
  return (
    <>
      <section className="skills max-width">
        <div className="wrapper ">
          <h2>Skill Stacks</h2>
          <div className="col-wrap">
            <div className="col1">
              {list1.map((skill) => (
                <span key={skill}>
                  <Image src={check} alt={skill} /> <p>{skill}</p>
                </span>
              ))}
            </div>
            <div className="col2">
              {list2.map((skill) => (
                <span key={skill}>
                  <Image src={check} alt={skill} />
                  <p>{skill}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
