import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export const metadata: Metadata = {
  title: 'Foundational Policy',
  description: 'Foundational Policies for Biosphere Studio: Cookies, Refunds, and Referrals.',
};

export default async function FoundationalPolicyPage() {
  // Read the markdown file
  const markdownFilePath = path.join(process.cwd(), 'app/markdowns/foundation.md');
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf8');

  return (
    <div className="max-w-6xl mx-auto mt-24 mb-20 px-2  md:px-6 lg:px-8">
      <div className="bg-gray-50 shadow overflow-hidden rounded-lg">
        <div className="px-3 md:px-10 py-1">
          <MarkdownRenderer content={markdownContent} />
        </div>
      </div>
    </div>
  );
}