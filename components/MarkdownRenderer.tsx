// components/MarkdownRenderer.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose prose-slate max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-5 mb-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-4 mb-2" {...props} />,
          p: ({ node, ...props }) => <p className="my-3" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-fixed" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead className="bg-gray-50" {...props} />,
          tbody: ({ node, ...props }) => <tbody className="divide-y divide-gray-200" {...props} />,
          th: ({ node, children, ...props }) => {
            // Use a ref to track column index within each row
            const thRef = React.useRef<HTMLTableCellElement>(null);
            const [isFirstColumn, setIsFirstColumn] = React.useState(false);

            React.useEffect(() => {
              if (thRef.current) {
                const row = thRef.current.parentElement;
                if (row) {
                  const cells = Array.from(row.children);
                  setIsFirstColumn(cells[0] === thRef.current);
                }
              }
            }, []);

            return (
              <th
                ref={thRef}
                className={`px-2 py-3 text-left text-xs md:text-sm font-semibold text-gray-900 bg-gray-50 h-16 ${isFirstColumn
                    ? 'w-28 md:w-36 lg:w-44'
                    : 'w-48 md:w-56 lg:w-64'
                  }`}
                style={{
                  verticalAlign: 'top',
                  lineHeight: '1.3'
                }}
                {...props}
              >
                <div className="overflow-hidden">
                  {children}
                </div>
              </th>
            );
          },
          td: ({ node, children, ...props }) => {
            // Use a ref to track column index within each row
            const tdRef = React.useRef<HTMLTableCellElement>(null);
            const [isFirstColumn, setIsFirstColumn] = React.useState(false);

            React.useEffect(() => {
              if (tdRef.current) {
                const row = tdRef.current.parentElement;
                if (row) {
                  const cells = Array.from(row.children);
                  setIsFirstColumn(cells[0] === tdRef.current);
                }
              }
            }, []);

            return (
              <td
                ref={tdRef}
                className={`px-2 py-3 text-xs md:text-sm text-gray-700 align-top h-32 ${isFirstColumn
                    ? 'w-28 md:w-36 lg:w-44 font-medium'
                    : 'w-48 md:w-56 lg:w-64'
                  }`}
                style={{
                  verticalAlign: 'top',
                  lineHeight: '1.4',
                  wordWrap: 'break-word',
                  overflow: 'hidden'
                }}
                {...props}
              >
                <div className="overflow-hidden h-full">
                  {children}
                </div>
              </td>
            );
          },
          hr: ({ node, ...props }) => <hr className="my-8 border-gray-300" {...props} />,

        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}