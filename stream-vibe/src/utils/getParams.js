import getAttrNameFromSelector from "./getAttrNameFromSelector"

const getParams = (element, dataAttrSelector) => {
  const attrValue = element.getAttribute(
    getAttrNameFromSelector(dataAttrSelector)
  )
  return attrValue ? JSON.parse(attrValue) : {}
}

export default getParams
