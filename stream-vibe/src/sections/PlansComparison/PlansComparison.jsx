import classNames from "classnames"
import "./PlansComparison.scss"
import PlansCollection from "./PlansCollection.jsx"
import Table from "@/components/Table"
import Specifications from "@/components/Specifications"
import Tabs from "@/components/Tabs"

const PlansComparison = (props) => {
  const { className } = props
  const { headCells, rows } = PlansCollection
  const tabsItems = headCells
    .filter((headCell) => headCell.tabsTitle)
    .map((headCell, headCellIndex) => ({
      title: headCell.tabsTitle,
      isActive: headCell.tabsTitle === "Basic",
      children: (
        <Specifications
          items={rows.map(({ cells, isWide }) => ({
            key: cells[0],
            value: cells[headCellIndex + 1],
            isWide,
          }))}
        />
      ),
    }))
  return (
    <>
      <section
        className={classNames(className, "plans-comparison", "container")}
        title="Compare our plans and find the right one for you"
        titleId="plans-comparison-title"
        description="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
      >
        <Table headCells={headCells} rows={rows} className="hidden-mobile" />
        <Tabs
          title="plans-comparison-tabs-title"
          items={tabsItems}
          className="visible-mobile"
        />
      </section>
    </>
  )
}

export default PlansComparison
