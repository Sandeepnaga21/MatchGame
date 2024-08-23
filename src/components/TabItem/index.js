import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateActiveTab(tabId)
  }

  return (
    <div>
      <li key={tabId}>
        <button type="button" onClick={onClickTab}>
          {displayText}
        </button>
      </li>
    </div>
  )
}

export default TabItem
