'use client';

import styles from './Table.module.css';

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
  className?: string;
}

export default function Table({ headers, rows, className = '' }: TableProps) {
  return (
    <div className={styles.tableContainer}>
      <table className={`${styles.table} ${className}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}