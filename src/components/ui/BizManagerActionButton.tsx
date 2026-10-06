import type { ComponentProps } from "react";
import type { BizManagerAction } from "../../lib/bizmanager";
import { Button } from "./Button";

type BizManagerActionButtonProps = Omit<ComponentProps<typeof Button>, "href" | "children" | "target" | "rel"> & {
  action: BizManagerAction;
};

export function BizManagerActionButton({ action, ...buttonProps }: BizManagerActionButtonProps) {
  const newTabProps = action.opensInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Button href={action.href} {...newTabProps} {...buttonProps}>
      {action.label}
    </Button>
  );
}
