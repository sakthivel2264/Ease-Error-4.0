import { resolveMethod } from "thirdweb";
    import { useReadContract } from "thirdweb/react";

export default function Component() {
  const { data, isLoading } = useReadContract({ 
    contract, 
    method: resolveMethod("fund"), 
    params: [{{args}}]
  });
}

import { resolveMethod } from "thirdweb";
    import { useReadContract } from "thirdweb/react";

export default function Component() {
  const { data, isLoading } = useReadContract({ 
    contract, 
    method: resolveMethod("getFund"), 
    params: [{{args}}] 
  });
}