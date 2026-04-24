import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

/**
 * Certification data structure
 * Supports two types of entries:
 *
 * 1. Grouped Track (type: "group"):
 *    - Shows as a parent group with multiple sub-certifications
 *    - Each sub-cert has its own verification link
 *
 * 2. Standalone Certification (type: "single"):
 *    - Individual certification with one verification link
 *
 * Example Grouped Track:
 * {
 *   type: "group",
 *   program: "Training Program Name",
 *   issuer: "Organization",
 *   issuedOn: "Jan 2026",
 *   expiresOn: "Jan 2028",
 *   certifications: [
 *     { name: "Sub-Cert 1", issuedOn: "Jan 2026", expiresOn: "Jan 2028", link: "https://example.com" },
 *     { name: "Sub-Cert 2", issuedOn: "Jan 2026", expiresOn: "Jan 2028", link: "https://example.com" }
 *   ]
 * }
 *
 * Example Single Certification:
 * {
 *   type: "single",
 *   name: "Certification Name",
 *   issuer: "Organization",
 *   issuedOn: "Jan 2026",
 *   expiresOn: "Jan 2028",
 *   link: "https://example.com/credential"
 * }
 */

type SubCertification = {
  name: string;
  issuedOn: string;
  expiresOn: string;
  link: string;
};

type SingleCert = {
  type: "single";
  name: string;
  issuer: string;
  issuedOn: string;
  expiresOn: string;
  link: string;
};

type GroupCert = {
  type: "group";
  program: string;
  issuer: string;
  issuedOn: string;
  expiresOn: string;
  certifications: SubCertification[];
};

type CertEntry = SingleCert | GroupCert;

const certifications: CertEntry[] = [
  {
    type: "group",
    program: "Snowflake Platform",
    issuer: "Snowflake",
    issuedOn: "2026",
    expiresOn: "—",
    certifications: [

      {
        name: "SnowPro Associate: Platform",
        issuedOn: "Apr 2026",
        expiresOn: "—",
        link: "https://achieve.snowflake.com/42421114-a511-456e-8352-463790538323#acc.mw6CqOWS",
      },
      {
      name: "Snowflake University Platform Skills Badge",
      issuedOn: "Apr 2026",
      expiresOn: "—",
      link: "https://achieve.snowflake.com/ac7f48d0-0c1d-442d-8512-cb060fd6e225#acc.nxshtcOi",
      },
      {
      name: "Ascent: Snowflake Platform Training - APAC",
      issuedOn: "Apr 2026",
      expiresOn: "—",
      link: "/certifications/ascent-snowflake.pdf",
      },

    ],
  },
  {
    type: "group",
    program: "Claude AI Developer Training",
    issuer: "Anthropic",
    issuedOn: "2026",
    expiresOn: "—",
    certifications: [

      {
        name: "Claude Code in Action",
        issuedOn: "Mar 2026",
        expiresOn: "—",
        link: "https://verify.skilljar.com/c/xx6qihwb3fci",
      },
      {
        name: "Claude 101",
        issuedOn: "Mar 2026",
        expiresOn: "—",
        link: "https://verify.skilljar.com/c/yv2xd3nhexmj",
      },
      {
        name: "AI Fluency: Framework & Foundations",
        issuedOn: "2026",
        expiresOn: "—",
        link: "https://verify.skilljar.com/c/vbtm8k3dt6m2",
      },
      // {
      //   name: "Building with the Claude API",
      //   issuedOn: "2026",
      //   expiresOn: "—",
      //   link: "#",
      // },
      // {
      //   name: "Introduction to Model Context Protocol",
      //   issuedOn: "2026",
      //   expiresOn: "—",
      //   link: "#",
      // },
    ],
  },
  
  {
    type: "single",
    name: "Airtable Builder Certification",
    issuer: "Airtable",
    issuedOn: "Feb 2025",
    expiresOn: "Mar 2027",
    link: "http://verify.skilljar.com/c/ydmgwrodijpm",
  },
  {
    type: "single",
    name: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    issuedOn: "Apr 2024",
    expiresOn: "—",
    link: "https://www.credly.com/badges/82ac39aa-0a7c-4ee1-ab14-7fbf7e0bdb35f",
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
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeftIcon className="size-10 translate-x-0 transform transition-all duration-300 ease-out group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Certifications
          </h1>
            <p className="text-muted-foreground text-base">
              Here are some certifications I&apos;ve earned in areas like AI, cloud computing, and digital forensics. These demonstrate my skills and commitment to professional development.
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
            {certifications.flatMap((cert, index) => {
              // Handle grouped certifications
              if (cert.type === "group") {
                return [
                  // Group header row
                  <tr
                    key={`${index}-header`}
                    className="bg-muted/40 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm font-bold">
                      {cert.program}
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
                      {/* No link for group header */}
                    </td>
                  </tr>,
                  // Sub-certification rows
                  ...cert.certifications.map((subCert, subIndex) => (
                    <tr
                      key={`${index}-sub-${subIndex}`}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm text-muted-foreground/70 pl-8">
                        <span className="text-muted-foreground/40">└ </span>
                        {subCert.name}
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">
                        {/* Issuer column empty for sub-certs */}
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">
                        {subCert.issuedOn}
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">
                        {subCert.expiresOn}
                      </td>
                      <td className="py-4 px-4 text-sm">
                        <Link
                          href={subCert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:underline underline-offset-4"
                        >
                          Verify Credential
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  )),
                ];
              }

              // Handle single certifications
              return (
                <tr
                  key={`${index}-single`}
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
                      className="inline-flex items-center gap-1 text-blue-600 hover:underline underline-offset-4"
                    >
                      Verify Credential
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
