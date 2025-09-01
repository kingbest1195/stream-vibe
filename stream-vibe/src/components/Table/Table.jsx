import classNames from "classnames"
import "./Table.scss"

const Table = (props) => {
  const { className, headCells = [], rows = [] } = props
  return (
    <>
      <table className={classNames(className)}>
        {headCells.length > 0 && (
          <thead>
            <tr>
              {headCells.map(({ children, width }, index) => (
                <th key={index} width={width}>
                  {children}
                </th>
              ))}
            </tr>
          </thead>
        )}

        {rows.length > 0 && (
          <tbody>
            {rows.map(({ cells }, index) => (
              <tr key={index}>
                {cells.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  )
}

export default Table
