import { useRef } from "react";

function useProjectRef() {
  const references = useRef([]);

  return references;
}

export default useProjectRef;
