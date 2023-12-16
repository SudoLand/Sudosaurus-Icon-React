/**
 * @author WMXPY
 * @namespace InLine
 * @description Digestible
 */

import * as React from "react";

export type SudosaurusIconInLineDigestibleProps = {

    readonly size: number;
    readonly color: string;

    readonly digest?: boolean;

    readonly children?: React.ReactNode;
};

export const SudosaurusIconInLineDigestible: React.FC<SudosaurusIconInLineDigestibleProps> = (
    props: SudosaurusIconInLineDigestibleProps,
) => {

    if (props.digest) {

        return (<div
            style={{
                width: props.size / 4,
                height: props.size / 4,
                backgroundColor: props.color,
                printColorAdjust: "exact",
                WebkitPrintColorAdjust: "exact",
            }}
        />)
    }

    return (<div>
        {props.children}
    </div>);
};
