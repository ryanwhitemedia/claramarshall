import { useState, useEffect, useCallback } from "react"
import { useWindowSize } from "@jam3/react-hooks"
import screenLayout from "../screenLayout"

/**
 * Layout hook
 * Set layout on window resize
 * @returns {object} Current layout object
 *
 * Example:
 * import useLayout from '[path]/use-layout';
 * const { layout } = useLayout();
 */
function useLayout() {
  const { innerWidth } = useWindowSize(10)
  const [currentLayout, setCurrentLayout] = useState(screenLayout.all)

  const handleResize = useCallback(() => {
    if (
      Object.keys(screenLayout.all).filter(
        key => currentLayout[key] !== screenLayout[key]
      ).length
    ) {
      setCurrentLayout(screenLayout.all)
    }
  }, [currentLayout, setCurrentLayout])

  useEffect(() => {
    handleResize()
  }, [handleResize, innerWidth])

  return {
    screenLayout: currentLayout,
  }
}

export default useLayout
