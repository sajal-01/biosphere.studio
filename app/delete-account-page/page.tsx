import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account",
  description: "Request deletion of your Biosphere.Studio account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="mx-auto mt-24 mb-20 max-w-3xl px-4 md:px-6">
      <article className="rounded-lg border border-gray-200 bg-white px-6 py-10 text-gray-900 shadow dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 md:px-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Account settings
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Delete your account</h1>
        <p className="mt-5 text-base leading-7 text-gray-600 dark:text-white">
          You can request permanent deletion of your Biosphere.Studio account and the personal data associated with it.
        </p>

        <div className="mt-8 flex flex-col gap-6 border-t border-gray-200 pt-8 dark:border-gray-800">
          <section>
            <h2 className="text-xl font-semibold">How to request deletion</h2>
            <p className="mt-3 leading-7 text-gray-600 dark:text-white">
              Send an email to{" "}
              <a className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 dark:text-blue-400" href="mailto:support@biosphere.studio?subject=Delete%20my%20account">
                support@biosphere.studio
              </a>{" "}
              from the email address connected to your account. Include “Delete my account” in the subject line.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">What happens next</h2>
            <p className="mt-3 leading-7 text-gray-600 dark:text-white">
              We will verify the request and permanently delete your account and associated personal data, except where we are required to retain information by law. Deletion may take up to 30 days to complete.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
