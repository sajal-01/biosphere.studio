// // components/MarkdownRenderer.tsx
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';


// interface MarkdownRendererProps {
//   content: string;
// }

// export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
//   return (
//     <article className="prose prose-slate max-w-none">
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         rehypePlugins={[rehypeRaw]}
//         components={{
//           h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />,
//           h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-5 mb-3" {...props} />,
//           h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-4 mb-2" {...props} />,
//           p: ({ node, ...props }) => <p className="my-3" {...props} />,
//           ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
//           ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
//           li: ({ node, ...props }) => <li className="mb-1" {...props} />,
//           a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
//           blockquote: ({ node, ...props }) => (
//             <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
//           ),
//           table: ({ node, ...props }) => (
//             <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
//               <table className="min-w-full divide-y divide-gray-300 table-fixed" {...props} />
//             </div>
//           ),
//           thead: ({ node, ...props }) => <thead className="bg-gray-50" {...props} />,
//           tbody: ({ node, ...props }) => <tbody className="divide-y divide-gray-200" {...props} />,
//           th: ({ node, children, ...props }) => {
//             // Use a ref to track column index within each row
//             const thRef = React.useRef<HTMLTableCellElement>(null);
//             const [isFirstColumn, setIsFirstColumn] = React.useState(false);

//             React.useEffect(() => {
//               if (thRef.current) {
//                 const row = thRef.current.parentElement;
//                 if (row) {
//                   const cells = Array.from(row.children);
//                   setIsFirstColumn(cells[0] === thRef.current);
//                 }
//               }
//             }, []);

//             return (
//               <th
//                 ref={thRef}
//                 className={`px-2 py-3 text-left text-xs md:text-sm font-semibold text-gray-900 bg-gray-50 h-16 ${isFirstColumn
//                     ? 'w-28 md:w-36 lg:w-44'
//                     : 'w-48 md:w-56 lg:w-64'
//                   }`}
//                 style={{
//                   verticalAlign: 'top',
//                   lineHeight: '1.3'
//                 }}
//                 {...props}
//               >
//                 <div className="overflow-hidden">
//                   {children}
//                 </div>
//               </th>
//             );
//           },
//           td: ({ node, children, ...props }) => {
//             // Use a ref to track column index within each row
//             const tdRef = React.useRef<HTMLTableCellElement>(null);
//             const [isFirstColumn, setIsFirstColumn] = React.useState(false);

//             React.useEffect(() => {
//               if (tdRef.current) {
//                 const row = tdRef.current.parentElement;
//                 if (row) {
//                   const cells = Array.from(row.children);
//                   setIsFirstColumn(cells[0] === tdRef.current);
//                 }
//               }
//             }, []);

//             return (
//               <td
//                 ref={tdRef}
//                 className={`px-2 py-3 text-xs md:text-sm text-gray-700 align-top h-32 ${isFirstColumn
//                     ? 'w-28 md:w-36 lg:w-44 font-medium'
//                     : 'w-48 md:w-56 lg:w-64'
//                   }`}
//                 style={{
//                   verticalAlign: 'top',
//                   lineHeight: '1.4',
//                   wordWrap: 'break-word',
//                   overflow: 'hidden'
//                 }}
//                 {...props}
//               >
//                 <div className="overflow-hidden h-full">
//                   {children}
//                 </div>
//               </td>
//             );
//           },
//           hr: ({ node, ...props }) => <hr className="my-8 border-gray-300" {...props} />,

//         }}
//       >
//         {content}
//       </ReactMarkdown>
//     </article>
//   );
// }

"use client"

import React from 'react';
import ReactMarkdown from 'react-markdown';


interface MarkdownRendererProps {
  content: string;
}

// Separate components for table elements that need hooks
const EditableTableHeader: React.FC<React.ThHTMLAttributes<HTMLTableHeaderCellElement>> = ({ children, ...props }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = React.useState(false);

  React.useEffect(() => {
    if (isEditing && ref.current) {
      ref.current.focus();
      ref.current.select();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <th
      {...props}
      className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold cursor-pointer hover:bg-gray-100"
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          defaultValue={typeof children === 'string' ? children : ''}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-none outline-none"
        />
      ) : (
        children
      )}
    </th>
  );
};

const EditableTableCell: React.FC<React.TdHTMLAttributes<HTMLTableDataCellElement>> = ({ children, ...props }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = React.useState(false);

  React.useEffect(() => {
    if (isEditing && ref.current) {
      ref.current.focus();
      ref.current.select();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <td
      {...props}
      className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-50"
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          defaultValue={typeof children === 'string' ? children : ''}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-none outline-none"
        />
      ) : (
        children
      )}
    </td>
  );
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const components = {

    table({ children, ...props }: any) {
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300" {...props}>
            {children}
          </table>
        </div>
      );
    },
    th: EditableTableHeader,
    td: EditableTableCell,
    tr({ children, ...props }: any) {
      return (
        <tr className="hover:bg-gray-50" {...props}>
          {children}
        </tr>
      );
    },
    h1({ children, ...props }: any) {
      return <h1 className="text-3xl font-bold mb-4 text-gray-900" {...props}>{children}</h1>;
    },
    h2({ children, ...props }: any) {
      return <h2 className="text-2xl font-semibold mb-3 text-gray-800" {...props}>{children}</h2>;
    },
    h3({ children, ...props }: any) {
      return <h3 className="text-xl font-medium mb-2 text-gray-700" {...props}>{children}</h3>;
    },
    h4({ children, ...props }: any) {
      return <h4 className="text-lg font-medium mb-2 text-gray-700" {...props}>{children}</h4>;
    },
    p({ children, ...props }: any) {
      return <p className="mb-4 text-gray-700 leading-relaxed" {...props}>{children}</p>;
    },
    ul({ children, ...props }: any) {
      return <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700" {...props}>{children}</ul>;
    },
    ol({ children, ...props }: any) {
      return <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700" {...props}>{children}</ol>;
    },
    li({ children, ...props }: any) {
      return <li className="ml-4" {...props}>{children}</li>;
    },
    blockquote({ children, ...props }: any) {
      return (
        <blockquote
          className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 text-gray-700 italic"
          {...props}
        >
          {children}
        </blockquote>
      );
    },
    a({ children, href, ...props }: any) {
      return (
        <a
          href={href}
          className="text-blue-600 hover:text-blue-800 underline"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    strong({ children, ...props }: any) {
      return <strong className="font-semibold text-gray-900" {...props}>{children}</strong>;
    },
    em({ children, ...props }: any) {
      return <em className="italic text-gray-700" {...props}>{children}</em>;
    }
  };

  return (
    <div className="prose max-w-none">
      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;