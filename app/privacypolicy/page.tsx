import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for our services',
};

export default async function PrivacyPolicyPage() {
  // Read the markdown file
  const markdownFilePath = path.join(process.cwd(), 'app/markdowns/privacy.md');
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf8');

  return (
    <div className="max-w-6xl mx-auto mt-24 mb-20 px-2  md:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100">
        <div className="px-3 md:px-10 py-1">
          <MarkdownRenderer content={markdownContent} />
        </div>
      </div>
    </div>
  );
}
