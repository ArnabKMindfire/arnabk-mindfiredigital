import { termsData } from "@/constants";
import React from "react";

export default function TermOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto my-10 px-6">
      <div className="tracking-wider flex flex-col gap-4 text-mindfire-content-p-text-color">
        <p>
          These &quot;Terms&quot; regulate your use of the website provided by
          the platform and the services it offers (&quot;Services&quot;). They
          constitute a legally binding agreement between you and the platform,
          so review them carefully.
        </p>
        <p>
          These Terms exclusively apply to this Website and do not extend to
          open source code on GitHub or other websites, each governed by their
          respective terms.
        </p>
        <p>
          The platform may modify these Terms and Website features at any time.
          Such changes become effective upon posting, and your continued use of
          the Website implies acceptance of these changes.
        </p>
      </div>
      <div className="flex flex-col gap-10 my-10">
        {termsData.map(({ title, description }, index) => {
          return (
            <div key={index}>
              <h3 className="mb-2 text-mindfire-content-p-text-color font-semibold text-lg tracking-wider">
                {title}
              </h3>
              <p className="tracking-wider text-mindfire-content-p-text-color">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
