import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

/**
 * Certification data structure
 * To add more certifications, simply add another object to this array
 * Example:
 * {
 *   name: "New Certification Name",
 *   issuer: "Issuing Organization",
 *   issuedOn: "Jan 2026",
 *   expiresOn: "Jan 2028",
 *   link: "https://example.com/credential"
 * }
 */
const certifications = [
  {
    name: "Claude AI Developer Training",
    issuer: "Anthropic",
    issuedOn: "Mar 2026",
    expiresOn: "—",
    link: "#",
  },
  {
    name: "DFIR Foundations and Techniques",
    issuer: "Blue Cape Security",
    issuedOn: "Jul 2025",
    expiresOn: "—",
    link: "#",
  },
  {
    name: "Airtable Builder Certification",
    issuer: "Airtable",
    issuedOn: "Feb 2025",
    expiresOn: "Mar 2027",
    link: "#",
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    issuedOn: "Apr 2024",
    expiresOn: "—",
    link: "#",
  },
];

export default function CertificationsPage() {
  if (certifications.length === 0) {
    return (
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <div className="space-y-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeftIcon className="size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:-translate-x-1" />
            Back
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Certifications
          </h1>
          <p className="text-muted-foreground">
            No certifications found.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-4xl">
      <div className="space-y-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeftIcon className="size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:-translate-x-1" />
          Back
        </Link>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Certifications
          </h1>
          <p className="text-muted-foreground text-base">
            Here are some certifications I've earned in areas like AI, cloud computing, and digital forensics. These demonstrate my skills and commitment to professional development.
          </p>
        </div>
      </div>

      {/* Certifications Table */}
      <div className="w-full overflow-x-auto border rounded-lg bg-card shadow-sm">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="text-left py-4 px-4 font-semibold text-sm">
                Certification Name
              </th>
              <th className="text-left py-4 px-4 font-semibold text-sm">
                Issued by
              </th>
              <th className="text-left py-4 px-4 font-semibold text-sm">
                Issued on
              </th>
              <th className="text-left py-4 px-4 font-semibold text-sm">
                Expires on
              </th>
              <th className="text-left py-4 px-4 font-semibold text-sm">
                Credential Link
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {/* Map through certifications array and dynamically render rows */}
            {certifications.map((cert, index) => (
              <tr
                key={index}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="py-4 px-4 text-sm font-medium">
                  {cert.name}
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {cert.issuer}
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {cert.issuedOn}
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {cert.expiresOn}
                </td>
                <td className="py-4 px-4 text-sm">
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-colors"
                  >
                    View Certificate
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
