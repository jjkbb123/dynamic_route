import type { ReactElement, FC } from "react";
import { forwardRef } from "react";
import styles from "./index.less";

const Forward: React.ForwardRefRenderFunction<HTMLInputElement, any> = forwardRef((_props, ref): ReactElement => {
    console.log(document.styleSheets);
    return (
        <input ref={ref} onChange={() => console.log(ref)} />
    );
});
export default Forward;
