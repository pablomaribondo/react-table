/* global DriversData: readonly, TracksData: readonly */
import { FC } from 'react';

interface TableProps {
  title: string;
  tableData: DriversData[] | TracksData[];
  headingColumns: string[];
  breakOn?: string;
}

const Table: FC<TableProps> = ({
  tableData,
  headingColumns,
  title,
  breakOn = 'medium'
}) => {
  let tableClass = 'table-container__table';

  if (breakOn === 'small') {
    tableClass += ' table-container__table--break-sm';
  } else if (breakOn === 'medium') {
    tableClass += ' table-container__table--break-md';
  } else if (breakOn === 'large') {
    tableClass += ' table-container__table--break-lg';
  }

  const data = (tableData as Array<DriversData | TracksData>).map(row => {
    const rowData: { key: string; value: string | number }[] = Object.values(
      row
    ).reduce((accumulator, rowDataValue, index) => {
      accumulator.push({
        key: headingColumns[index],
        value: rowDataValue
      });

      return accumulator;
    }, []);

    return (
      <tr key={Math.random()}>
        {rowData.map(rowDataElement => (
          <td key={Math.random()} data-heading={rowDataElement.key}>
            {rowDataElement.value}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="table-container">
      <div className="table-container__title">
        <h2>{title}</h2>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            {headingColumns.map(column => (
              <th key={Math.random()}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default Table;
