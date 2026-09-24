import type { JsonLdNode } from "@/lib/seo/jsonld";

type JsonLdProps = {
  data: JsonLdNode | JsonLdNode[];
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((node, index) => (
        <script
          // Stable order; schema nodes are static per route.
          key={typeof node["@id"] === "string" ? node["@id"] : `jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(node).replace(/</g, "\\u003c")
          }}
        />
      ))}
    </>
  );
}
