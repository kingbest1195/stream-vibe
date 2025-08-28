import classNames from "classnames"
import "./Tabs.scss"
import getTabsElementsIdsFromTitle from "./utils/getTabsElementsIdsFromTitle"
import TabsNavigation from "./components/TabsNavigation"

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
    isEnabledOnlyOnMobile = false,
  } = props
  return (
    <>
      <div
        className={classNames(className, "tabs", {
          "tabs--enabled-only-on-mobile": isEnabledOnlyOnMobile,
        })}
        data-js-tabs={JSON.stringify({ navigationTargetElementId })}
      >
        {!navigationTargetElementId && (
          <TabsNavigation title={title} items={items} />
        )}
        <div className="tabs__body">
          {items.map((item, index) => {
            const { title, children, isActive } = item

            const { buttonId, contentId } = getTabsElementsIdsFromTitle(title)

            return (
              <div
                className={classNames("tabs__content", {
                  "is-active": isActive,
                })}
                id={contentId}
                aria-labelledby={buttonId}
                tabIndex={0}
                data-js-tabs-content=""
              >
                {children}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Tabs
