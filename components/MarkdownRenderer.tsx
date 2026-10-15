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
      className="border border-white bg-black px-4 py-2 font-semibold text-white cursor-pointer hover:bg-black"
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          defaultValue={typeof children === 'string' ? children : ''}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full bg-black text-white border-none outline-none"
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
      className="border border-white px-4 py-2 text-white cursor-pointer hover:bg-black"
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          defaultValue={typeof children === 'string' ? children : ''}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full bg-black text-white border-none outline-none"
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
          <table className="min-w-full border-collapse border border-white bg-black text-white" {...props}>
            {children}
          </table>
        </div>
      );
    },
    th: EditableTableHeader,
    td: EditableTableCell,
    tr({ children, ...props }: any) {
      return (
        <tr className="text-white hover:bg-black" {...props}>
          {children}
        </tr>
      );
    },
    h1({ children, ...props }: any) {
      return <h1 className="text-3xl font-bold mb-4 text-white" {...props}>{children}</h1>;
    },
    h2({ children, ...props }: any) {
      return <h2 className="text-2xl font-semibold mb-3 text-white" {...props}>{children}</h2>;
    },
    h3({ children, ...props }: any) {
      return <h3 className="text-xl font-medium mb-2 text-white" {...props}>{children}</h3>;
    },
    h4({ children, ...props }: any) {
      return <h4 className="text-lg font-medium mb-2 text-white" {...props}>{children}</h4>;
    },
    p({ children, ...props }: any) {
      return <p className="mb-4 text-white leading-relaxed" {...props}>{children}</p>;
    },
    ul({ children, ...props }: any) {
      return <ul className="list-disc list-inside mb-4 space-y-1 text-white" {...props}>{children}</ul>;
    },
    ol({ children, ...props }: any) {
      return <ol className="list-decimal list-inside mb-4 space-y-1 text-white" {...props}>{children}</ol>;
    },
    li({ children, ...props }: any) {
      return <li className="ml-4" {...props}>{children}</li>;
    },
    blockquote({ children, ...props }: any) {
      return (
        <blockquote
          className="border-l-4 border-white pl-4 py-2 my-4 bg-black text-white italic"
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
          className="text-white hover:text-white underline"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    strong({ children, ...props }: any) {
      return <strong className="font-semibold text-white" {...props}>{children}</strong>;
    },
    em({ children, ...props }: any) {
      return <em className="italic text-white" {...props}>{children}</em>;
    }
  };

  return (
    <div className="prose prose-invert max-w-none bg-black text-white">
      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
